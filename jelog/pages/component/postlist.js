export default function PostList() {
  const testPostList = [
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

  testPostList.map((test) => console.log(test.title));

  return (
    <section className="postlist_layout">
      <h2>postList</h2>
      <div className="mainpost_layout">
        {testPostList.map((mainpost) => (
          <div>
            <img src="#" alt="sumnuil" />
            <p>{mainpost.title}</p>
            <p>{mainpost.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
