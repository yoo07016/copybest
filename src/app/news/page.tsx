import NewList from "@/components/news/NewList";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function News() {

  return (
    <>
      <span className="text-2xl font-bold">
        <h1>파이낸셜 뉴스</h1>
      </span>
      <div className="border-t-2 mb-4 mt-4"></div>
      <div className="bg-blue-500 h-144">
      </div>
      <div className="border-t-4 mb-4 mt-4"></div>
      <span className="text-xl font-bold">
        <h1>모든 뉴스</h1>
      </span>
      <ul className="flex space-x-6">
        <li>최신</li>
        <li>많이 본</li>
        <li>뉴스 속보</li>
        <li>경제</li>
        <li>주식 시장</li>
        <li>경제 지표</li>
        <li>상품과 선물</li>
        <li>
          카테고리 더 보기
          <ul className="hidden">
            <li>외환</li>
            <li>암호화폐</li>
            <li>코로나 19</li>
            <li>일반</li>
            <li>IPO</li>
            <li>개인 금융</li>
          </ul>
        </li>
      </ul>
      <NewList/>
      <ul>
      </ul>
    </>
  );
}
