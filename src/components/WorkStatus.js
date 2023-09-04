import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import Details from './Details'
import PageHeader from "./PageHeader";
import {useRecoilState} from "recoil";
import {contentStore} from "../data/store";

const WorkStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useRecoilState(contentStore);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
  };



  return (
    <>
      <div className="flex flex-col w-screen-full m-6">
        {/* Page Header */}
        <PageHeader pageHeaderName={"작업 현황"} />

        {/* Table */}
        <div className="overflow-hidden">
          <table className="min-w-full mb-6">
            <thead>
              <tr>
                <td scope="col" className="border px-5 py-2 text-left text-sm font-bold text-gray-800 bg-indigo-50 my-8">검색어</td>
                <td scope="col" className="border px-5 py-2 items-center" colSpan={"3"}>
                  <div className='flex flex-auto gap-3 items-center'>
                    <div className=''>
                      <select className='block border border-gray-200 rounded-md text-sm px-5 py-2 w-48'>
                        <option selected>계약명</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>

                    <div className=''>
                      <input type="text" className="w-96 text-start px-5 py-2  border border-gray-200 rounded-md text-sm" placeholder="검색어를 입력하세요." />
                    </div>

                    <div className='flex'>
                      <button type="button" className="flex items-center justify-center py-2 px-5 rounded-full bg-indigo-500 text-white font-bold shadow-sm transition-all text-xs">
                        검색
                      </button>
                    </div>

                    <div>
                      <button type="button" className="flex items-center justify-center py-2 px-5 rounded-full border border-gray-400 bg-white text-gray-400 font-bold shadow-sm transition-all text-xs">
                        검색 조건 초기화
                      </button>
                    </div>
                  </div>

                </td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              <tr>
                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">담당PM</td>
                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <div className='flex flex-grow'>
                    <input type="text" suffix="x" className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm" placeholder="담당자 없음">
                    </input>
                  </div>
                </td>
                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">진행상태</td>
                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <select className="py-2 px-3 pr-9 w-full block border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                    <option selected>전체</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">작업상태</td>
                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <select className="py-2 px-3 pr-9 w-full block border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                    <option selected>전체</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">주문번호</td>
                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <div className='flex flex-col-flow'>
                    <input type="text" className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4" placeholder="주문번호를 입력하세요.">
                    </input>

                    <button type="button" className="flex py-3 px-5 text-center rounded-full bg-indigo-500 text-white font-bold shadow-sm align-middle transition-all text-xs mr-2">
                      검색
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="grid grid-cols-2 gap-4">

            <div className="grid grid-cols">
              <table className="min-w-full divide divide-gray-200 border border-collapse">
                <thead>
                  <tr className="bg-indigo-50 my-8">
                    <td scope="col" className="border row-span-2 px-6 py-3 text-center text-sm font-bold text-gray-800" rowSpan={"2"}>
                      전체
                      <span className="material-icons ml-1 text-base text-blue-400">info</span>
                    </td>
                    <th scope="col" className="border col-span-2 px-6 py-3 text-center text-sm font-bold text-gray-800" colSpan={"2"}>설치 미완료</th>
                    <th scope="col" className="border col-span-2 px-6 py-3 text-center text-sm font-bold text-gray-800" colSpan={"2"}>설치 완료</th>
                  </tr>
                  <tr>
                    <th scope="col" className="border px-6 py-3 text-center text-sm font-bold text-gray-800">
                      계획 미수립
                      <span className="material-icons ml-1 text-base text-blue-400">info</span>
                    </th>
                    <th scope="col" className="border col-span-2 px-6 py-3 text-center text-sm font-bold text-gray-800">
                      계획 수립
                      <span className="material-icons ml-1 text-base text-blue-400">info</span>
                    </th>
                    <th scope="col" className="border col-span-2 px-6 py-3 text-center text-sm font-bold text-gray-800">
                      Billing 미완료
                      <span className="material-icons ml-1 text-base text-blue-400">info</span>
                    </th>
                    <th scope="col" className="border col-span-2 px-6 py-3 text-center text-sm font-bold text-gray-800">
                      Billing 완료
                      <span className="material-icons ml-1 text-base text-blue-400">info</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-center">
                  <tr>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">94</td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-800">86</td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-800">6</td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-800">{contents.clientName}</td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-800">{contents.shipToName}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols">
              <table className="min-w-full divide divide-gray-200 border border-collapse">
                <tr className="">
                  <td scope="col" className="border row-span-2 text-center text-sm font-bold text-gray-800 bg-indigo-50 px-6" rowSpan={"2"}>진척도</td>
                  <th scope="col" className="border-b flex items-center">
                    <div className='flex w-24 items-center py-6'>
                      <span className='text-sm font-bold text-gray-800 mr-2 ml-4'>실적</span>
                      <span className="material-icons mr-4 text-blue-400">info</span>
                    </div>
                    <div className="flex w-96 h-4 bg-gray-200 rounded overflow-hidden">
                      <div className="justify-center overflow-hidden bg-blue-500" role="progressbar" style={{ width: '2.1%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

                    </div>
                    <span className='w-24 ml-4 mr-6 text-sm justify-end'>2.1%</span>
                  </th>

                </tr>
                <tr>
                  <th scope="col" className="flex items-center">
                    <div className='flex w-24 items-center text-center py-6'>
                      <span className='text-sm font-bold text-gray-800 mr-2 ml-4'>Billing</span>
                      <span className="material-icons mr-4 text-blue-400">info</span>
                    </div>
                    <div className="flex w-96 h-4 bg-gray-200 rounded overflow-hidden">
                      <div className="justify-center overflow-hidden bg-blue-500" role="progressbar" style={{ width: '0.0%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

                    </div>
                    <span className='w-24 ml-4 mr-6 text-sm justify-end'>0%</span>
                  </th>
                </tr>
              </table>
            </div>

          </div >

          <div className="grid grid-cols">
            <div className="flex flex-cols mt-5 justify-between">
              <button type="button" className="inline-flex py-2 px-4 rounded-full border border-gray-400 bg-white text-gray-400 font-bold shadow-sm align-middle transition-all text-xs">
                엑셀 다운로드
              </button>
              <span className="inline-flex items-center text-sm text-gray-600">총 69건</span>
            </div>
          </div>

          <div className="overflow-hidden mt-6">
            <Modal
              open={isOpen}
              onCancel={handleCancel}
              onOk={handleOk}
              width={1300}
              footer={null}
            >
              <Details closeModal={handleCancel} />
            </Modal>
            <table className="min-w-full border-collapse cursor-pointer" onClick={showModal}>
              <thead className="bg-indigo-50 my-8">
                <tr className="divide-x-2 divide-gray-200">
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">NO</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">설치계획일(ESL)</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">설치계획일(네트워크)</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">계약명</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">Shop명</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">주문번호</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">담당PM</th>
                  <th scope="col" className="border px-6 py-3 text-left text-sm font-bold text-gray-800">진행상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="border-l px-6 py-4 whitespace-nowrap text-sm text-gray-800">69</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.08.02</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.07.30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">SAP - EMS Test(08-02)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">백석문화대학교 산학협력단...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">295</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"></td>
                  <td className="border-r px-6 py-4 whitespace-nowrap text-sm text-gray-800">계획 미수립</td>
                </tr>
                <tr>
                  <td className="border-l px-6 py-4 whitespace-nowrap text-sm text-gray-800">68</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.08.02</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.07.30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">SAP - EMS Test(08-03)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">베스트샵평화점 본사</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">298</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"></td>
                  <td className="border-r px-6 py-4 whitespace-nowrap text-sm text-gray-800">계획 미수립</td>
                </tr>
                <tr>
                  <td className="border-l px-6 py-4 whitespace-nowrap text-sm text-gray-800">67</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.08.02</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.07.30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">SAP - EMS Test(08-04)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">청호대리점 본사</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">299</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"></td>
                  <td className="border-r px-6 py-4 whitespace-nowrap text-sm text-gray-800">계획 미수립</td>
                </tr>
                <tr>
                  <td className="border-l border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">66</td>
                  <td className="border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.08.02</td>
                  <td className="border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">2023.07.30</td>
                  <td className="border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">SAP - EMS Test(08-05)</td>
                  <td className="border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">납품처</td>
                  <td className="border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">300</td>
                  <td className="border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800"></td>
                  <td className="border-r border-b px-6 py-4 whitespace-nowrap text-sm text-gray-800">계획 미수립</td>
                </tr>

              </tbody>
            </table>

          </div>

        </div >
      </div >



    </>

  );
};


export default WorkStatus;