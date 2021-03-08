import React, {useState ,useEffect} from 'react'
import './worked.css'
function Worked () {
    
    const [offset, setOffset] = useState(false);
    const scroll = () =>{
        if(window.pageYOffset > 600){
            setOffset(false)
        }else{
            setOffset(true)
        }
    };

    useEffect(() => {
        scroll()
    }, []);
    window.addEventListener('scroll', scroll)


    const [openWord , setWord] = useState(true);
    const show = () =>{
        if(window.innerWidth<450){
            setWord(false)
        }else{
            setWord(true)
        }
    };

useEffect (() => {
    show()
}, []);
window.addEventListener('resize', show)

    const state = {
                Education: [
                    <>
                    {/* <h3>EDUCATION HISTORY</h3> */}
                    <div className="line-1">
                        <span className="m-05">2015-2020 <b className="a f-14"><a href="https://www.cmru.ac.th/" target="_blank">@ Bachelor Degrees</a></b></span>
                        <ul className="font-t">
                            <li><ion-icon name="school-outline"></ion-icon>มหาวิทยาลัยราชภัฏเชียงใหม่</li>
                            <ul>
                                <li>  <ion-icon name="caret-forward-outline"></ion-icon>สาขา เทคโนโลยีสารสนเทศ</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="line-1">
                        <span>2012-2015 <b className="a f-14"><a href="https://www.hangdong.ac.th/webnew/index.php" target="_blank">@ Senior High School</a></b></span>
                        <ul>
                            <li><ion-icon name="school-outline"></ion-icon>โรงเรียนหางดงรัฐราษฎร์อุปถัมภ์</li>
                            <ul>
                                <li>  <ion-icon name="caret-forward-outline"></ion-icon>สาย ศิลป์ภาษาจีน</li>
                            </ul>
                        </ul>
                    </div>
                        
                    </>

                ],
                Work: [
                    <>
                        <div>
                            <span>2020 - Present <b className="a f-14"><a href="https://poseintelligence.com/" target="_blank">@Poseintelligence</a></b></span>
                            <ul className="line-1">
                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Implement & Tester ERP System 
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>2018-2019 <b className="a f-14"><a href="https://www.chiangmaiaquarium.com/" target="_blank">@เชียงใหม่ ซู อควาเรียม</a></b></span>
                            <ul className="line-1">
                                <li><ion-icon name="person-outline"></ion-icon>นักศึกษาฝึกงาน</li>
                                <ul>
                                    <li> <ion-icon name="caret-forward-outline"></ion-icon>
                                    Customer Relationship Management System (PHP)</li>
                                    <li><ion-icon name="caret-forward-outline"></ion-icon>
                                    Website ChiangMaiAquarium</li>
                                </ul>
                            </ul>
                        </div>
                    </>
                ],
        status: false
      }
      const [open, setOpen] = useState(false);

      const Resume = () => {
        setOpen(false)
        console.log(state.status);
      }
      const Education = () => {
        setOpen(true)
        console.log(state.status);
      }
      

        return (
            <section id="experience" className={offset ?'ms ' :'ms animate__animated animate__zoomInUp'}>
                <div>
        <h1 className="h-text">Working Experience{openWord? '':<br />} & Education</h1>
                </div>
                <div className="inner">
                    <ul className="inner-li"> 

                        <li className={open ? "" :"active-w"}>
                            <div className={open ? "active-no" :"active-b"}  onClick={Resume} >Working Experience</div>
                        </li>

                        <li className={open ? "active-w" :""}>
                                <div className={open ? "active-b" :"active-no"} onClick={Education}>Education</div>
                        </li>
                        
                    </ul>
                    <div className="rl-2">
                        {open ?  state.Education : state.Work}
                    </div>
                </div>
            </section>
        )
    }

    export default  Worked