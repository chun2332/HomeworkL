import { MdDateRange } from 'react-icons/md';
import { DateCard } from './styles/style';
import Link from "next/link";

const Date_card = () => {
    return <>
        <DateCard>
            <thead>
               {/* row0 */}
                <tr>
                    <td><MdDateRange />低價月曆</td>
                </tr>
                 {/* row1 */}
                <tr className="row1">
                    <th>
                        <div className="ticket-type"> 
                            <span className="ticket-back">回程</span>
                            <span className="ticket-coming">去程</span>
                        </div>
                    </th>
                    <th>12/30(六)</th>
                    <th>12/31(日)</th>
                    <th>
                        <div className="remove-padding">
                            <div>
                                <span className="year">
                                    <span>2018</span>
                                </span>
                            </div>
                            <span>01/01(一)</span>
                        </div>
                    </th>
                    <th>01/02(二)</th>
                    <th>01/03(三)</th>
                    <th>01/04(四)</th>
                    <th>01/05(五)</th>
                </tr>
                {/* row2 */}
                <tr>
                    <th>12/27(三)</th>
                    <td className="col-1">--</td>
                    <td className="col-2">
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td className="col-3">
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td className="col-4">
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td className="col-5">
                        <span className="d-flex">
                            <div className="trangle"></div>
                                <span className="sale">最便宜</span>
                        </span>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td className="col-6">
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td className="col-7">
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
                {/* row3 */}
                <tr>
                    <th>12/28(四)</th>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                    <span className="d-flex">
                            <div className="trangle"></div>
                                <span className="sale">最便宜</span>
                        </span>
                        <Link href="/"><a>$12,300</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
                {/* row4 */}
                <tr>
                    <th>12/29(五)</th>
                    <td>查看</td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
                {/* row5 */}
                <tr>
                    <th>12/30(六)</th>
                    <td>查看</td>
                    <td>查看</td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                    <span className="d-flex">
                            <div className="trangle"></div>
                                <span className="sale">最便宜</span>
                        </span>
                        <Link href="/"><a>$12,300</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
                {/* row6 */}
                <tr>
                    <th>12/31(日)</th>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                    <span className="d-flex">
                            <div className="trangle"></div>
                                <span className="sale">最便宜</span>
                        </span>
                        <Link href="/"><a>$12,300</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
                {/* row7 */}
                <tr>
                    <th>
                        <div>
                            <span className="year">
                                <span>2018</span>
                            </span>
                        </div>
                        <span>01/01(一)</span>
                    </th>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                    <Link href="/"><a>$15,568</a></Link>
                    </td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
                {/* row8 */}
                <tr>
                    <th>01/02(二)</th>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>查看</td>
                    <td>
                        <Link href="/"><a>$15,568</a></Link>
                    </td>
                </tr>
            </thead>
       </DateCard>
    </>
}

export default Date_card