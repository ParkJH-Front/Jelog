export default function PostList() {
  const testPostListArray = [
    {
      sumnail: "",
      title: "testtitle1",
      content: "testtesttest",
    },
    {
      sumnail: "",
      title: "testtitle2",
      content: "testtesttest2",
    },
    {
      sumnail: "",
      title: "testtitle3",
      content: "testtesttest3",
    },
    {
      sumnail: "",
      title: "testtitle4",
      content: "testtesttest4",
    },
    {
      sumnail: "",
      title: "testtitle5",
      content: "testtesttest5",
    },
    {
      sumnail: "",
      title: "testtitle6",
      content: "testtesttest6",
    },
  ];

  return (
    <section className="postlist_layout">
      <div className="mainpost_layout">
        {testPostListArray.map((mainpost) => (
          <div className="mainpost_content">
            <img src="/img/logo.png" alt="sumnuil" />
            <p>{mainpost.title}</p>
            <hr />
            <span>{mainpost.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
