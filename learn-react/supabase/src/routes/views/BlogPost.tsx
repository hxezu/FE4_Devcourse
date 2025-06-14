import { ArrowLeft } from "lucide-react";
import BlogContent from "../../components/blog/BlogContent";
import CommentsSection from "../../components/blog/CommentsSection";
import { useLoaderData, useNavigate } from "react-router";
import { fetchPostDetail } from "../../loader/post.loader";
import Button from "../../components/ui/Button";
import { useOptimistic, useState, useTransition } from "react";
import { useAuthStore } from "../../stores/authStore";
import supabase from "../../utils/supabase";

export type PostDetail = NonNullable<
  Awaited<ReturnType<typeof fetchPostDetail>>
>;
export default function BlogPost() {
  const navigate = useNavigate();
  const session = useAuthStore((state) => state.session);
  const post = useLoaderData<PostDetail>();
  const [comments, setComments] = useState(post.comments);

  // optimisticComments 는 빈배열
  const [optimisticComments, addOptimisticComments] = useOptimistic<
    PostDetail["comments"],
    PostDetail["comments"][number]
  >(comments, (state, value) => [...state, value]);

  const [isPending, startTransition] = useTransition();
  const handleAddComment = async (comment: string) => {
    if (!comment.trim()) return;
    if (!session?.user.id) {
      alert("로그인 후 등록 가능합니다.");
      return;
    }
    // 가짜 데이터
    addOptimisticComments({
      id: Date.now(),
      comment,
      profile_id: session?.user.id,
      created_at: new Date().toISOString(),
      post_id: Number(post.id),
      profiles: {
        id: session?.user.id,
        username: session?.user.user_metadata.name,
        avatar_url: session?.user.user_metadata.avatar_url,
      },
    });

    startTransition(async () => {
      //await new Promise((resolve) => setTimeout(resolve, 5000));

      const { data } = await supabase
        .from("comments")
        .insert([
          { profile_id: session?.user.id, post_id: Number(post.id), comment },
        ])
        .select(
          `*, profiles(
          id,
          username,
          avatar_url
          )`
        )
        .single();
      //transition 이중첩
      startTransition(() => {
        setComments((comments) => [
          ...comments,
          data as PostDetail["comments"][number],
        ]);
      });
      console.log(data); //진짜 데이터
    });
  };

  const handleDeleteComment = async (id: number) => {
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (!error)
      setComments((comments) =>
        comments.filter((comment) => comment.id !== id)
      );
  };

  const handleDeletePost = async (id: number) => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (!error) navigate("/");
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          className="flex items-center text-[#58a6ff] hover:underline transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to posts
        </button>
      </div>

      {/* Blog Content */}
      <BlogContent {...post} handleDeletePost={handleDeletePost} />

      {/* Comments Section */}
      <CommentsSection
        comments={optimisticComments}
        handleAddComment={handleAddComment}
        handleDeleteComment={handleDeleteComment}
        isPending={isPending}
      />
    </div>
  );
}
