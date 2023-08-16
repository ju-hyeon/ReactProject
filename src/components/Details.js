import React, { useState } from 'react';
import { Modal } from 'antd';

const Details = ({closeModal}) => {

  return (
    <>
      <div class="flex flex-col w-screen-full m-6">
        <div class="bg-white mb-6 border-b">
          <span class="font-bold text-lg text-gray-700">
            영업 기회 등록
          </span>
        </div>

        <div class="overflow-hidden">
          <span className='text-gray-600 text-sm mt-2 mb-3 font-bold'>고객사 정보</span>
          <table class="min-w-full mb-6 text-center">
            <tbody class="divide-y divide-gray-200 ">
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Industry / Type
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <div className='flex flex-auto gap-3'>
                    <div className='w-full'>
                      <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                        <option selected>선택하세요</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className='w-full'>
                      <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                        <option selected>선택하세요</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Division_SP
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <select class="w-full block border border-gray-200 rounded-md text-sm px-5 py-2">
                    <option selected>선택하세요</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Client Name
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="Client Name을 입력하세요.">
                  </input>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Sold To Name</td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="Sold To Name을 입력하세요.">
                  </input>
                </td>

              </tr>
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Ship To Name</td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="Ship To Name을 입력하세요.">
                  </input>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Bill To Name</td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="Bill To Name을 입력하세요.">
                  </input>
                </td>
              </tr>

              <tr>
                <td scope="col" class="border px-5 py-2 text-sm font-bold text-gray-800 bg-indigo-50 my-8">Channel</td>
                <td scope="col" class="border px-5 py-2 items-center" colSpan={"3"}>
                  <div className=''>
                    <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                      <option selected>선택하세요</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </td>
              </tr>

              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Market Type
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <select class='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                    <option selected>선택하세요</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Region
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <select class="w-full block border border-gray-200 rounded-md text-sm px-5 py-2">
                    <option selected>KR(대한민국)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>

              </tr>
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">사업자등록번호
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="사업자등록번호를 입력하세요.">
                  </input>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">주소</td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="주소를 입력하세요.">
                  </input>
                </td>

              </tr>
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">대표자명
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="대표자명을 입력하세요.">
                  </input>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">대표번호</td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4" placeholder="대표번호를 입력하세요.">
                  </input>
                </td>
              </tr>
            </tbody>
          </table>

          <span className='text-gray-500 text-sm mb-4 mt-4 font-bold'>영업 정보</span>
          <table class="min-w-full mb-6 text-center">
            <tbody class="divide-y divide-gray-200 ">
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Project Name
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <div className='flex flex-grow'>
                    <input type="text" class="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm" placeholder="Project Name을 입력하세요">
                    </input>
                  </div>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Product
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <div className='flex flex-auto gap-3'>
                    <div className='w-full'>
                      <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                        <option selected>선택하세요</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className='w-full'>
                      <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                        <option selected>선택하세요</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td class="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Deal Type</td>
                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  <select class="w-full block border border-gray-200 rounded-md text-sm px-5 py-2">
                    <option selected>선택하세요</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>

                <td class="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Service Type
                  <span className='text-sm text-red-500 font-bold'>*</span>
                </td>
                <td class="border px-5 py-4 whitespace-nowrap text-right text-sm">
                  <select class='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                    <option selected>선택하세요</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>

              </tr>
            </tbody>
          </table>

          <div className='flex justify-end gap-4'>
            <button 
              type="button" 
              onClick={closeModal} 
              className="flex items-center py-2 px-5 rounded-full border border-gray-400 bg-white text-gray-400 font-bold shadow-sm transition-all text-xs"
            >
            닫기
            </button>
            <button 
              type="button" 
              className="flex items-center py-2 px-5 rounded-full bg-indigo-500 text-white font-bold shadow-sm transition-all text-xs"
              onClick={closeModal} 
            >
            저장
            </button>
          </div>

        </div >
      </div >



    </>

  );
};


export default Details;