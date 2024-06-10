import { Tweet } from 'react-tweet';

export default async function Page() {
  return (
    <div data-theme="light" className="max-w-[700px] mx-auto h-screen">
      <div className="grid grid-cols-2 gap-4">
        <Tweet id="1479060178419032071" />
        <Tweet id="1526170638641143809" />
        <Tweet id="1045721110808014848" />
        <Tweet id="1491117651724480512" />
        <Tweet id="1405899416125517827" />
        <Tweet id="1243914902877507584" />
      </div>
    </div>
  );
}