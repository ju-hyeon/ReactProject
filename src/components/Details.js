import React, {useState} from 'react';
import {Button} from 'antd';
import axios from 'axios';
import {useRecoilState, useRecoilValue} from "recoil";
import {contentStore} from "../data/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Joi from "joi";

const Validation = require('./Validate/Validation'); // 외부 모듈 가져오기


const Details = ({closeModal}) => {
        const [category, setCategory] = useState('');
        const [content, setContent] = useState('');
        const contents = useRecoilValue(contentStore);
        const [recoilContents, setRecoilContents] = useRecoilState(contentStore);

        // 유효성 검사
        const [formData, setFormData] = useState({
            clientName: '',
            soldToName: '',
            shipToName: '',
            billToName: '',
        })

        const handleFormChange = (field, value) => {
            setFormData({
                ...formData,
                [field]: value,
            })
        }

        const validator = new Validation();

        const infoSchema = Joi
            .object({
                clientName: validator.getClientName(),  // 별도의 유효성 검증 클래스 생성
                soldToName: validator.getSoldToName(),
                shipToName: validator.getShipToName(),
                billToName: validator.getBillToName()
            })

        const handleValidate = async () => {    // 비동기
            try {
                await infoSchema.validateAsync({
                    clientName: formData.clientName,
                    soldToName: formData.soldToName,
                    shipToName: formData.shipToName,
                    billToName: formData.billToName,
                })

                console.log("유효성 검사 통과");
                alert("유효성 검사를 통과하였습니다.");

            } catch (error) {
                console.log("유효성 검사 실패", error);
                alert(error.message);
            }

        }
        // end 유효성 검사


        const handleChangeData = (field, value) => {
            if (field === 'category') setCategory(value);
            else if (field === 'content') setContent(value);

            // recoil 사용
            else if (field === 'clientName') {
                setRecoilContents({...recoilContents, clientName: value});
            } else if (field === 'shipToName') {
                setRecoilContents({...recoilContents, shipToName: value});
            }
        };

        const handleDataRecoilSave = () => {
            setRecoilContents({...recoilContents});
            alert("저장되었습니다.");
        }


        // 등록
        const handleDataSave = async () => {
            if (!content && !category) {
                alert("내용을 입력해주세요");
                return;
            }
            await axios({
                method: 'post',
                url: 'https://ems-dev-api.sysnova.kr/api/edu/post',
                params: {
                    userId: 'user1',
                    category: category,
                    content: content
                }
            })
                .then(response => {
                    console.log(response.data);
                    alert("저장되었습니다.")
                })
                .catch(error => {
                    console.log('오류', error);
                    alert(error);
                })
        }
        // end


        // 조회
        const handleDataSelect = async () => {
            await axios({
                method: 'get',
                url: 'https://ems-dev-api.sysnova.kr/api/edu/get',
                params: {
                    userId: 'user1'
                }
            })
                .then(response => {
                    let data = response.data.data[0];
                    setContent(data.content);
                    setCategory(data.category);

                    alert("저장된 내용을 조회했습니다.");

                })
                .catch(error => {
                    console.log(error);
                    alert("저장된 내용이 없습니다.");
                })
        }
        // end

        // 수정
        const handleDataUpdate = async () => {
            if (!content && !category) {
                alert("내용을 입력해주세요");
                return;
            }
            await axios({
                method: 'put',
                url: 'https://ems-dev-api.sysnova.kr/api/edu/put',
                params: {
                    userId: 'user1',
                    category: category,
                    content: content
                }
            })
                .then(response => {
                    console.log(response.data);
                    alert("수정되었습니다.");

                })
                .catch(error => {
                    console.log('오류', error);
                    alert(error);

                })
        }
        // end

        // 삭제
        const handleDataDelete = async () => {
            if (!content && !category) {
                alert("삭제할 내용이 없습니다.");
                return;
            }
            await axios({
                method: 'delete',
                url: 'https://ems-dev-api.sysnova.kr/api/edu/delete',
                params: {
                    userId: 'user1'
                }
            })
                .then(response => {
                    console.log(response.data);
                    alert("삭제되었습니다.");
                    setContent('');
                    setCategory('');

                })
                .catch(error => {
                    console.log('오류', error);
                    alert(error);
                })
        }
        // end


        return (
            <>
                <div className="flex flex-col w-screen-full m-6">
                    <div className="bg-white mb-6 border-b">
                  <span className="font-bold text-lg text-gray-700">
                    <FontAwesomeIcon icon={["far", "file"]} className="w-5 h-5 mr-1"/> 영업 기회 등록
                  </span>
                    </div>

                    <div className="overflow-hidden">
                        <span className='text-gray-600 text-sm mt-2 mb-3 font-bold'>고객사 정보</span>
                        <table className="min-w-full mb-6 text-center">
                            <tbody className="divide-y divide-gray-200 ">
                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Industry
                                    / Type
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <div className='flex flex-auto gap-3'>
                                        <div className='w-full'>
                                            <select
                                                className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                                                <option selected>선택하세요</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div className='w-full'>
                                            <select
                                                className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                                                <option selected>선택하세요</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Division_SP
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <select className="w-full block border border-gray-200 rounded-md text-sm px-5 py-2">
                                        <option selected>선택하세요</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Client
                                    Name
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <input type="text"
                                           value={formData.clientName}
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="Client Name을 입력하세요."
                                           onChange={(e) => handleFormChange('clientName', e.target.value)}
                                    />
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Sold
                                    To Name
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <input type="text"
                                           value={formData.soldToName}
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="Sold To Name을 입력하세요."
                                           onChange={(e) => handleFormChange('soldToName', e.target.value)}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Ship
                                    To Name
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <input type="text"
                                           value={formData.shipToName}
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="Ship To Name을 입력하세요."
                                           onChange={(e) => handleFormChange('shipToName', e.target.value)}
                                    />
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Bill
                                    To Name
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <input type="text"
                                           name="content"
                                           value={formData.billToName}
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="Bill To Name을 입력하세요."
                                           onChange={(e) => handleFormChange('billToName', e.target.value)}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td scope="col"
                                    className="border px-5 py-2 text-sm font-bold text-gray-800 bg-indigo-50 my-8">Channel
                                </td>
                                <td scope="col" className="border px-5 py-2 items-center" colSpan={"3"}>
                                    <div className=''>
                                        <select
                                            className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                                            <option selected>선택하세요</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Market
                                    Type
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                                        <option selected>선택하세요</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Region
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <select className="w-full block border border-gray-200 rounded-md text-sm px-5 py-2">
                                        <option selected>KR(대한민국)</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>

                            </tr>
                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">사업자등록번호</td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <input type="text"
                                           className="flex w-full py-2 px-3 block border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="사업자등록번호를 입력하세요.">
                                    </input>
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">주소</td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <input type="text"
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="주소를 입력하세요.">
                                    </input>
                                </td>

                            </tr>
                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">대표자명</td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <input type="text"
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="대표자명을 입력하세요.">
                                    </input>
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">대표번호</td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <input type="text"
                                           className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm mr-4"
                                           placeholder="대표번호를 입력하세요.">
                                    </input>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <span className='text-gray-500 text-sm mb-4 mt-4 font-bold'>영업 정보</span>
                        <table className="min-w-full mb-6 text-center">
                            <tbody className="divide-y divide-gray-200 ">
                            <tr>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Project
                                    Name
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <div className='flex flex-grow'>
                                        <input type="text"
                                               className="flex w-full py-2 px-3 border border-gray-200 rounded-md text-sm"
                                               placeholder="Project Name을 입력하세요">
                                        </input>
                                    </div>
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Product
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <div className='flex flex-auto gap-3'>
                                        <div className='w-full'>
                                            <select
                                                className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                                                <option selected>선택하세요</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div className='w-full'>
                                            <select
                                                className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
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
                                <td className="border px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-indigo-50 my-8">Deal
                                    Type
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <select className="w-full block border border-gray-200 rounded-md text-sm px-5 py-2">
                                        <option selected>선택하세요</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>

                                <td className="border px-5 py-4 whitespace-nowrap text-sm text-gray-800 font-bold bg-indigo-50 my-8">Service
                                    Type
                                    <span className='text-sm text-red-500 font-bold'>*</span>
                                </td>
                                <td className="border px-5 py-4 whitespace-nowrap text-right text-sm">
                                    <select className='w-full block border border-gray-200 rounded-md text-sm px-5 py-2'>
                                        <option selected>선택하세요</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>

                            </tr>
                            </tbody>
                        </table>

                        {/* Button */}
                        <div className='flex justify-end gap-4'>
                            <Button onClick={closeModal}>닫기</Button>
                            <Button danger onClick={handleDataDelete}>삭제</Button>
                            <Button type="primary" className="bg-blue-500" onClick={handleDataUpdate}>수정</Button>
                            <Button type="primary" className="bg-blue-500" onClick={handleDataSave}>저장</Button>
                            <Button type="primary" className="bg-blue-500" onClick={handleDataSelect}>내용 호출</Button>
                            <Button type="primary" className="bg-blue-500" onClick={handleDataRecoilSave}>Recoil</Button>
                            <Button onClick={handleValidate}>유효성 검사</Button>
                        </div>

                    </div>
                </div>


            </>

        );
    }
;


export default Details;