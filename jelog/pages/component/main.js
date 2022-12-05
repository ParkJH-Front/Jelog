import TitleList from "./titlelist";
import PostList from "./postlist";

export default function Main() {
  return (
    <div>
      <section className="main_layout">
        <TitleList />
        <PostList />
      </section>
      <div className="copylight_layout">
        <p>copylight</p>
        <p>made by parkjehyen, minjeyoung</p>
      </div>
    </div>
  );
}
