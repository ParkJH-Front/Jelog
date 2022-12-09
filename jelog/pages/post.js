import Nav from "./component/nav";
import TitleList from "./component/titlelist";
import style from "./style/post.module.css";

export default function post() {
  const post = {
    title: "title",
    content: `Yeah (ayy)
Yah
Get that money and 열 (what?)
밤하늘의 펄
나는 날아가지 벌 (벌)
난 돌직구, 너는 커브 (yeah)
Cup 안에, cup 안에, cup 안에, cup
야바위 같은 세상에 나는 도사 같은 포즈
Hmm 술 안 마셔도 한 도수 높아
타오르는 열 위에서 춤을 춰 tough guy (yeah)
I'm on my level, progamer
내 영혼들은 많아 남자 버전의 aespa (ayy)
난 영감을 받고 다시 또 창의력 가뭄
다시 또 열기를 발견, 난 이걸 10년째 반복
다시 또 쉬어갈 수 있는 타이밍이 나와
그 사이에도 새로운 이야기들이 나와
난 그냥 물처럼 흘러가는 존재
빽도가 돼도 나는 절대 안돼 고체
Yeah
타오르고 있는 열
같은 나무여도 내 건 뭔가 다른 결
서른이 돼도 계속 더 추구하는 변화
그때 가서 만들어지는 한 편의 영화 (yeah)
너의 반지를 던져 여긴 새빨간 용암
회색 도시 속에 활짝 피어 나는 성화 (ayy!)
Through your hands in the air (what?)
미지근해진 여기에는 더욱더 필요하지 예열
섭씨 100℃
섭씨 100℃
섭씨 100℃ (100, 100)
섭씨 100℃
Look at me, you like what you see I know (I know)
I'd like to see you do your thing and give it to me hard (yah)
내 머리, 어깨, 무릎, 발은 drippin' so hard (so hard)
Got that sauce, you know what it is?
I'm finger licking right
빛이 나 내 body, I see you think about it
우린 있어 차이가 I'm not just anybody (anybody)
니 눈이 부셔 가리지 앞을 난 다르니까
빛이 날 감싸니까 쳐다볼 수가 없잖아 (yeah)
You can do better
You know I'm better
Can no nobody
Do you like that?
Look in the mirror
Somebody tell her
Cannot compare us
You know I'm bad
Boilin' hot that's me, you're not, you're barely ninety-nine
I'm one hunnit and some more yeah, I set it all up on fire
Get it, bounce, bounce, bounce, bounce, bounce, bounce, bounce
You a liar ass on fire blow it out
Ain't no ounce of truth in what you talkin', bust 'em pounce, pounce (pew-pew)
Pissin' from your mouth, you wastin' time, yeah, I'ma bounce, bounce
난 불, 넌 재가 돼 okay?
먼지 같은 넌 그런 존재
난 불, 넌 재가 돼 okay?
먼지 같은 넌 그런 존재
Oh, I 난 뭐가 되던 내가 하면 I just do it better
날 따라 하기만 하면 돼 'cause I'm trendsetter
두 손을 높이 하늘 위로 올려봐 tonight
땀은 식힐 수 없어 이 온도가
섭씨 100℃
섭씨 100℃
섭씨 100℃
100, 100
100℃
100"`,
    like: 0,
  };

  return (
    <div>
      <Nav />
      <section className={style.flex_row}>
        <div className={style.post_left}>
          <TitleList />
        </div>
        <div className={style.post_right}>
          <section className={style.postpart}>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.content}</p>
            <span>{post.like}</span>
            <hr />
            <div>
              <p>coment</p>
              <div></div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
