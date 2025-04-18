export default function ProfileCard(props: {
  bgImg: string;
  userImg: string;
  uName: string;
  instaId: string;
  follow: (uName: string) => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={props.bgImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={props.userImg} alt="profile-pic" />
          <h3 className="alias">{props.uName}</h3>
          <p className="username">{props.instaId}</p>
          <button onClick={() => props.follow(props.uName)}>Follow</button>
        </div>
      </article>
    </>
  );
}
