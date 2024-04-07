"use client"
import C1 from "@/components/charts/Chart1";
import c1data from "@/chart1data.json"
import C2 from "@/components/charts/Chart2";
import c2data from "@/chart2data.json"

import axios from 'axios';
import { useState, useEffect } from "react"

axios.defaults.baseURL = "http://localhost:8000";

export default function Charts() {

  const [char1, setChar1] = useState();

  const getdata = async () => {
    try {
      const response = await axios.get("/notice/chart1");
      setChar1(response.data);
    } catch (error) {
      alert('조회 에러');
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <span className="text-2xl font-bold">
        <h1>금융차트</h1>
      </span>
      <div className="border-t-2 mb-4 mt-4"></div>
      <p className="text-blue-500 font-bold">라이브 차트</p>
      <div className="w-full h-128">
        <C1 data={char1} />
      </div>
      <p className="text-sm mt-6 mb-6">본 페이지를 이용해서 Investing.com의 실시간 차트 툴에 접근하세요. 이 툴은 강력하고, 기술적으로 앞서 있으며 사용하기 쉬워서 초보자에게는 직관적이고 고급사용자에게는 충분히 강력합니다. 주식, 지수, 상품, 통화, ETFs, 채권 및 금융 선물 등 수천 가지의 금융 상품을 입력 필드를 통해 검색하고 선택할 수 있습니다.</p>
      <div className="border-t-4 mb-4 mt-4"></div>
      <p className="text-xl font-bold">외환</p>
      <span className="flex">
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">외환 차트</p>
        </div>
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">인터렉티브 Forex 차트</p>
        </div>
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">멀티플 외환 차트</p>
        </div>
      </span>
      <div className="border-t-4 mb-4 mt-4"></div>
      <p className="text-xl font-bold">선물</p>
      <span className="flex">
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">선물 차트</p>
        </div>
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">인터렉티브 선물 차트</p>
        </div>
      </span>
      <div className="border-t-4 mb-4 mt-4"></div>
      <p className="text-xl font-bold">주식</p>
      <span className="flex">
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">주식 차트</p>
        </div>
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">인터렉티브 주식 차트</p>
        </div>
      </span>
      <div className="border-t-4 mb-4 mt-4"></div>
      <p className="text-xl font-bold">지수</p>
      <span className="flex">
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">지수 차트</p>
        </div>
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">인터렉티브 지수 차트</p>
        </div>
        <div className="bg-gray-400 w-2/3 h-44">
          <p className="text-blue-500 font-bold text-sm">멀티플 지수 차트</p>
        </div>
      </span>
      <div className="border-t-4 mb-4 mt-4"></div>
    </>
  );
}
