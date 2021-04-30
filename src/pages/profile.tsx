import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <h2>Profile</h2>

      <h3>・Introduction</h3>
      <p>都内の大学に通う建築学生。今年1月より本格的にフロントエンドの学習をはじめた。今後の展望として、大学4年次を休学し、2023年度でのWeb系企業への就職を目指している。
      <br>また、現在はReactの勉強に力を入れており、中長期のインターンシップに参加することを近い目標としている。</br></p>
      <p>学習している技術としてはモダンフロントエンドが多く、最近はReactとTailwind CSSを使用した開発物の作成をしている。このポートフォリオもこの2つを使用している。</p>

      <h3>・Hobby</h3>
      <p>小さいころから高校まで野球をしていたので、野球をすることが好き。野球以外のスポーツも好きでよく遊びでやるが、サッカーは絶望的に下手くそです。スポーツ好きなので見ることも好きで、最近はアメフトの面白さに気が付きました。<br>また、最近は筋トレにはまっています。週に3回くらい友人といじめあう瞬間が快感です。</br></p>
      <div>
        <h5>・MyData</h5>
        {/* <div>
          {service.map((service) => (
            <div>
      
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return { props: { endpoint: process.env.VERCEL_URL } };
};

export default Profile;
