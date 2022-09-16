
import { Fade, Slide } from "react-reveal"
import Blockchain from '../assets/Blockchain.jpg';
import HMS from '../assets/HMS.png';

const Recommendation = () => {
    return (
        <div class="recommendations" id="Recomend">
            <div>
                <div class="project-title "> Certificates </div>
                <h2 class="pro-subtitle">  </h2>
            </div>
            <Slide left duration={1500}>
                <div class="pos">
                    <div class="rec-card"></div> 
                    
                        <div class="rec-box">
                            <img class="rec-box-pic" src={Blockchain} alt="" />
                            <div class="box_title">Blockchain Olympiad Bangladesh  </div>
                            <div class="box_des" >   Finalist
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="rec-box-pic" src={HMS} alt="" />
                            <div class="box_title"> Huawei  </div>
                            <div class="box_des" > HMS Foundation (App Developer)
                                
                            </div>
                        </div>
                        
                    
                </div>
            </Slide>


        </div>
    );
}
export default Recommendation;