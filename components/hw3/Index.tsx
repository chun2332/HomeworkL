// icons
import { MdCalendarToday } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';
// styles
import  { Calendar }  from './styles/style';
import Link from "next/link";
// jQuery
import $ from 'jquery'; 




const Index = () => {
    

    return <>
        {/* prev & next btn */}
        <div className="carousel-btn carousel-btn-prev">
            <span className="prev-btn"></span>
        </div>
        <div className="carousel-btn carousel-btn-next">
            <span className="next-btn"></span>
        </div>
        <Calendar>
               {/* row0 */}
                <tr className="low-price-container">
                    <td className="low-price" colSpan={8}>
                        <MdCalendarToday />低價月曆<IoMdArrowDropup />
                    </td>
                </tr>
                 {/* row1 */}
                <tr className="row1">
                    <th>
                        <div className="ticket-type"> 
                            <span className="ticket-back">回程</span>
                            <span className="ticket-coming">去程</span>
                        </div>
                    </th>
                    <th>
                        <div className="remove-padding">12/30(六)</div>
                        </th>
                    <th>
                        <div className="remove-padding">12/31(日)</div>
                    </th>
                    <th>
                        <div>
                            <span className="year">
                                <span>2018</span>
                                </span>
                        </div>
                        <span>01/01(一)</span>
                    </th>
                    <th>
                        <div className="remove-padding">01/02(二)</div>
                    </th>
                    <th>
                        <div className="remove-padding">01/03(三)</div>
                    </th>
                    <th>
                        <div className="remove-padding">01/04(四)</div>
                    </th>
                    <th>
                        <div className="remove-padding">01/05(五)</div>
                    </th>
                </tr>
                {/* row2 */}
                <tr>
                    <th className="first-col">12/27(三)</th>
                    <td className="col-1 text-gray">--</td>
                    <td className="col-2">
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td className="col-3">
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td className="col-4">
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td className="col-5">
                        <div className="container-sale">
                            <Link href="/">
                                <a className="container-sale-a">
                                    <span>
                                        <div className="trangle"></div>
                                        <span className="sale">最便宜</span>
                                    </span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="days-up">$15,568 </a>
                            </Link>
                        </div>
                    </td>
                    <td className="col-6">
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td className="col-7">
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
                {/* row3 */}
                <tr>
                    <th className="first-col">12/28(四)</th>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td className="col-5">
                    <div className="container-sale">
                            <Link href="/">
                                <a className="container-sale-a">
                                    <span>
                                        <div className="trangle"></div>
                                        <span className="sale">最便宜</span>
                                    </span>
                                </a>
                        </Link>
                        <Link href="/">
                                <a className="days-up">$12,300 </a>
                        </Link>
                        </div>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
                {/* row4 */}
                <tr>
                    <th className="first-col">12/29(五)</th>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
                {/* row5 */}
                <tr>
                    <th className="first-col">12/30(六)</th>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <div className="container-sale">
                            <Link href="/">
                                <a className="container-sale-a">
                                    <span>
                                        <div className="trangle"></div>
                                        <span className="sale">最便宜</span>
                                    </span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="days-up">$12,300 </a>
                            </Link>
                        </div>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td> 
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
                {/* row6 */}
                <tr>
                    <th className="first-col">12/31(日)</th>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <div className="container-sale">
                            <Link href="/">
                                <a className="container-sale-a">
                                    <span>
                                        <div className="trangle"></div>
                                        <span className="sale">最便宜</span>
                                    </span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="days-up">$12,300 </a>
                            </Link>
                        </div>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
                {/* row7 */}
                <tr>
                    <th className="first-col">
                        <div>
                            <span className="year">
                                <span>2018</span>
                            </span>
                        </div>
                        <span>01/01(一)</span>
                    </th>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td> 
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                    <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
                {/* row8 */}
                <tr>
                    <th className="first-col">01/02(二)</th>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td className="text-gray">
                        <Link href="/"><a>查看</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a className="days-up">$15,568 </a></Link>
                    </td>
                </tr>
       </Calendar>
    </>
}

export default Index