//연습문제+
{
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: number): string {
    switch (day) {
      case Day.MONDAY:
        return "Monday";
      case Day.TUESDAY:
        return "Tuesday";
      case Day.WEDNESDAY:
        return "Wednesday";
      case Day.THURSDAY:
        return "Thursday";
      case Day.FRIDAY:
        return "Friday";
      case Day.SATURDAY:
        return "Saturday";
      case Day.SUNDAY:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }

  console.log(getDayName(1));
  console.log(getDayName(5));

  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    switch (status) {
      case Status.SUCCESS:
        return "Success";
      case Status.NOT_FOUND:
        return "Not Found";
      case Status.INTERNAL_ERROR:
        return "Internal Server Error";
      default:
        return "Unknown Status";
    }
  }

  console.log(getStatusMessage(404));

  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") return City.SEOUL;
    if (zip === "200") return City.BUSAN;
    if (zip === "300") return City.DAEGU;
    return "Unknown City";
  }

  console.log(getCityByZip("200"));

  enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    switch (role) {
      case Role.ADMIN:
        return "Full access";
      case Role.USER:
        return "Limited access";
      case Role.GUEST:
        return "Guest access";
      default:
        return "No access";
    }
  }

  console.log(getPermissionLevel("admin"));

  enum ProductStatus {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }
  function getProductStatus(status: number): string {
    switch (status) {
      case ProductStatus.PENDING:
        return "Pending";
      case ProductStatus.SHIPPED:
        return "Shipped";
      case ProductStatus.DELIVERED:
        return "Delivered";
      default:
        return "Unknown Status";
    }
  }

  console.log(getProductStatus(2));
  console.log(getProductStatus(3));

  enum OrderStatus {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    switch (status) {
      case OrderStatus.ORDER_PLACED:
        return "Your order has been placed.";
      case OrderStatus.PAYMENT_PENDING:
        return "Payment is pending.";
      case OrderStatus.SHIPPED:
        return "Your order has been shipped.";
      case OrderStatus.DELIVERED:
        return "Your order has been delivered.";
      default:
        return "Unknown Status";
    }
  }

  console.log(getOrderStatus("Shipped"));

  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: string): string {
    switch (option) {
      case Option.OPTION_ONE:
        return "You selected Option 1.";
      case Option.OPTION_TWO:
        return "You selected Option 2.";
      case Option.OPTION_THREE:
        return "You selected Option 3.";
      default:
        return "Invalid option";
    }
  }

  console.log(getOptionValue("Option 2"));

  enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    switch (meal) {
      case Meal.BREAKFAST:
        return "Good morning, it's breakfast time!";
      case Meal.LUNCH:
        return "Good afternoon, it's lunch time!";
      case Meal.DINNER:
        return "Good evening, it's dinner time!";
      default:
        return "Invalid meal time";
    }
  }
}

// 연습문제 +2
{
  enum UserStatus {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }

  function getUserStatus(status: string): string {
    switch (status) {
      case UserStatus.UNVERIFIED:
        return "User is unverified";
      case UserStatus.PENDING:
        return "User verification is pending";
      case UserStatus.VERIFIED:
        return "User is verified";
      default:
        return "Unknown status";
    }
  }

  console.log(getUserStatus("PENDING"));

  enum State {
    INITIATED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: number): string {
    switch (state) {
      case State.INITIATED:
        return "Order initiated";
      case State.PROCESSING:
        return "Order being processed";
      case State.SHIPPED:
        return "Order shipped";
      case State.DELIVERED:
        return "Order delivered";
      case State.CANCELLED:
        return "Order cancelled";
      default:
        return "Unknown state";
    }
  }
  console.log(getOrderState(1));

  enum Level {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT",
  }
  function getUserLevel(level: string): string {
    switch (level) {
      case Level.BEGINNER:
        return "Beginner user";
      case Level.INTERMEDIATE:
        return "Intermediate user";
      case Level.EXPERT:
        return "Expert user";
      default:
        return "Unknown level";
    }
  }

  console.log(getUserLevel("BEGINNER"));

  enum PayStatus {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: number): string {
    switch (status) {
      case PayStatus.NOT_STARTED:
        return "Payment not started";
      case PayStatus.IN_PROGRESS:
        return "Payment in progress";
      case PayStatus.COMPLETED:
        return "Payment completed";
      case PayStatus.FAILED:
        return "Payment failed";
      default:
        return "Unknown status";
    }
  }

  console.log(getPaymentStatus(1));

  enum Step {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  function getSignupStep(step: string): string {
    switch (step) {
      case Step.STEP_ONE:
        return "Step 1: Enter details";
      case Step.STEP_TWO:
        return "Step 2: Confirm email";
      case Step.STEP_THREE:
        return "Step 3: Complete registration";
      default:
        return "Unknown step";
    }
  }

  console.log(getSignupStep("STEP_THREE"));

  enum Type {
    SEDAN = "SEDAN",
    SUV = "SUV",
    TRUCK = "TRUCK",
  }

  function getPriceByCarType(type: string): number {
    switch (type) {
      case Type.SEDAN:
        return 30000;
      case Type.SUV:
        return 40000;
      case Type.TRUCK:
        return 50000;
      default:
        return 0;
    }
  }
  console.log(getPriceByCarType("SUV"));

  enum TextType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE",
  }

  function getMessageType(type: string): string {
    switch (type) {
      case TextType.TEXT:
        return "Text message";
      case TextType.IMAGE:
        return "Image message";
      case TextType.VIDEO:
        return "Video message";
      case TextType.FILE:
        return "File message";
      default:
        return "Unknown message type";
    }
  }
  console.log(getMessageType("TEXT"));

  enum LogLevel {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }
  function logMessage(level: string, message: string): void {
    switch (level) {
      case LogLevel.INFO:
        console.log("INFO: " + message);
        break;
      case LogLevel.WARN:
        console.log("WARN: " + message);
        break;
      case LogLevel.ERROR:
        console.log("ERROR: " + message);
        break;
      case LogLevel.DEBUG:
        console.log("DEBUG: " + message);
        break;
    }
  }
  logMessage("ERROR", "Oops!");

  enum Day {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }

  function getDayType(day: string): string {
    switch (day) {
      case Day.WEEKDAY:
        return "It's a weekday";
      case Day.WEEKEND:
        return "It's a weekend";
      default:
        return "Unknown day type";
    }
  }

  console.log(getDayType("WEEKDAY"));

  enum CampaignType {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  function getCampaignType(type: string): string {
    switch (type) {
      case CampaignType.DISCOUNT:
        return "Discount campaign";
      case CampaignType.PROMOTION:
        return "Promotion campaign";
      case CampaignType.GIVEAWAY:
        return "Giveaway campaign";
      default:
        return "Unknown campaign type";
    }
  }

  console.log(getCampaignType("DISCOUNT"));
}
