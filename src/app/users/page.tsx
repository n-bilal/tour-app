// import { GetStaticProps } from "next";
import Link from "next/link";
import {User} from "@/interfaces/models";
import {sampleUserData} from "@/utils/sample-data";
// import Layout from "@/components/Layout";
import List from "@/components/List";

type Props = {
  items: User[];
};

// const WithStaticProps = ({ items }: Props) => (
//   <Layout title="Users List | Next.js + TypeScript Example">
//     <h1>Users List</h1>
//     <p>
//       Example fetching data from inside <code>getStaticProps()</code>.
//     </p>
//     <p>You are currently on: /users</p>
//     <List items={items} />
//     <p>
//       <Link href="/">Go home</Link>
//     </p>
//   </Layout>
// );
//
// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: User[] = sampleUserData;
//   return { props: { items } };
// };
//
// export default WithStaticProps;



// Change: Convert to an async server component
export default async function UsersListPage() {
  // Simulate "fetching" sampleUserData statically
  const items: User[] = sampleUserData;

  return (
      <>
        <h1>Users List</h1>
        <p>Example fetching static data from a synchronous function.</p>
        <p>You are currently on: /users</p>

        <List items={items} />

        <p>
          <Link href="/">Go home</Link>
        </p>
      </>

  );
}
