export default function TitleList() {
  const titleListArray = [
    { title: "title1" },
    { title: "title2" },
    { title: "title3" },
    { title: "title4" },
    { title: "title5" },
    { title: "title6" },
    { title: "title7" },
  ];

  return (
    <section className="titlelist_layout">
      <h1>title</h1>
      {titleListArray.map((title) => (
        <a className="titleList_title">{title.title}</a>
      ))}
    </section>
  );
}
