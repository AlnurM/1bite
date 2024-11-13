
export default function Home() {
  return (
    <div className="">
      <form action="/auth/logout" method="POST">
        <button>Logout</button>
      </form>
    </div>
  );
}
