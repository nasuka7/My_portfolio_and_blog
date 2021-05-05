// import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="md:max-w-3xl sm:max-w-md text-sm tracking-wider leading-loose mx-auto mt-12">
        <h2 className="text-xl font-bold mb-12 border-b-2 border-red-300 p-2">
          Profile
        </h2>

        <h3 className="font-bold mb-5">・Introduction</h3>
        <p>
          　都内の大学に通う建築学生。今年1月より本格的にフロントエンドの学習をはじめた。今後は、大学4年次を休学し、2023年度でのWeb系企業への就職を目指している。
          現在はReactの勉強に力を入れており、近い目標として,中長期のインターンシップに参加することを設定している。
        </p>
        <p>
          　学習している技術としてはモダンフロントエンドが多く、最近はReactとTailwind CSSを使用した開発物の作成をしている。このポートフォリオもこの2つを使用している。
        </p>

        <h3 className="font-bold my-5">・Hobby</h3>
        <p>
          　小さいころから高校まで野球をしていたため、野球をすることが好き。野球以外のスポーツも好きでよく遊びでやるが、サッカーは絶望的に下手くそ。最近は筋トレにはまっている。週に3回くらい友人といじめあう瞬間が快感。
        </p>
        <div>
          <h3 className="font-bold my-5">・MyData</h3>
          <div>
            {services.map((service) => (
              <div>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
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
