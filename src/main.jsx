import BenCabPic from './asset/bencab.png';
import EdoGesture from './asset/Artwork/benedicto-cabrera-edo-gesture.jpg';
import Anxiety from './asset/Artwork/benedicto-cabrera-anxiety.jpg';
import PortraitofCaroline from './asset/Artwork/benedicto-cabrera-portrait-of-caroline-(the-artists-wife).jpg'
import SabelinBlue from './asset/Artwork/benedicto-cabrera-sabel-in-blue.jpg'
import TheOrientalFan from './asset/Artwork/benedicto-cabrera-the-oriental-fan-(from-larawan-series).jpg'
import YellowConfetti from './asset/Artwork/benedicto-cabrera-yellow-confetti.jpg'
import Twins from './asset/Artwork/f91e920d7f001698f455fd6dca051151--twins.jpg'
import MysteriousWoman from './asset/Artwork/benedicto-cabrera-mysterious-woman.jpg'
import { useState } from 'react';

const workItems = [
    {
        name:"Edo gesture",
        image:EdoGesture,
        year:1981,
    },
    {
        name:"Anxiety",
        image:Anxiety,
        year:2010,
    },
    {
        name:"Portrait of Caroline",
        image:PortraitofCaroline,
        year:1972,
    },
    {
        name:"Sabel in Blue",
        image:SabelinBlue,
        year: 2006,
    },
    {
        name:"The Oriental Fan",
        image:TheOrientalFan,
        year:1982,
    },
    {
        name:"Yellow Confetti",
        image:YellowConfetti,
        year:1984,
    },
    {
        name:"Mysterious woman",
        image:MysteriousWoman,
        year:2005,
    },
    {
        name:"Twins",
        image:Twins, 
        year:2001,
    },
    
]


export function Intro(props){
    const scrollState = props.scroll
    return(
        <div id="about-tribute" className="intro-cont">
            <div className="left-title">
                <div className="title-cont">
                    <p><h1>BEN</h1>edicto R.</p>
                    <p><h1>CAB</h1>rera</p>
                </div>
                <div className="description" >
                    <p style={{opacity:(scrollState<=500? 1:0)}}>BenCab is a Filipino painter and was awarded National Artist of the Philippines for Visual Arts (Painting) in 2006. He has been noted as arguably the best-selling painter of his generation of Filipino artists.</p>
                </div>
            </div>
            <div className="right-title">
                <div className="background-pic" style={{backgroundImage:"url('"+ BenCabPic +"')", opacity:scrollState<= 600? 1 : 0}}></div>
            </div>
        </div>
    )
}

const TimelineItem=(props)=>{
    return(
        <li>
        <div className="timeline-item-cont">
            <h1>{props.year}</h1>
            <i><h3>{props.event}</h3></i>
        </div>
        </li>
    )
}

export function Timeline(props){
    const scrollState = props.scroll

    return(
        <div id="timeline-tribute" className="timeline-cont" style={{opacity:( scrollState > 1316? (scrollState < 2635 ? "1": "0"): "0"), transition:"opacity .25s ease-in"}}>
            <ul className="item-cont">
                {
                    itemTime.map((value, index)=><TimelineItem key={index} year={value.year} event={value.event}/>)
                }
            </ul>
        </div>
    )
}

export function NavSideBar(props){
    const scrollState = props.scroll
    return(
        <div className="nav-container" style={{backgroundColor: scrollState >= 2635?"#282828a3":"#00000072"}}>
            <ul>
                {/* 0 */}
                <li >
                    <a style={{
                        fontSize:(scrollState <1316 ? "3.5vw": "1.5vw")
                    }} href="#about-tribute">ABOUT</a>
                </li> 

                {/* 1318 */}
                <li>
                    <a style={{fontSize:(scrollState > 1316? (scrollState < 2635 ? "3.5vw": "1.5vw"): "1.5vw")}} href="#timeline-tribute">TIMELINE</a>
                </li>

                {/* 2636 */}
                <li><a style={{fontSize:(scrollState >= 2635? "3.5vw": "1.5vw")}} href="#works-tribute">WORKS</a></li>
            </ul>
        </div>
    )
}

export function WorksGallery(props){
    const scrollState = props.scroll
    const [hoverSelected, setHoverSelected]= useState(0)
    const works = workItems
    const WorksCont=(props)=>{
        const value = props.data
        
        return(
            <div key={props.index} className="works-item-container"  >
            <div className="image-item" onMouseEnter={()=>setHoverSelected(props.index)} >
                <img src={value.image} alt="" />
            </div>
            <div className="caption-cont">
                <caption>{value.name} <i>({value.year})</i></caption>
            </div>
        </div>
        )
    }

    return(
        <div id="works-tribute" className="works-cont" style={{opacity:scrollState >= 2635? 1:0, backgroundImage: "url("+works[hoverSelected].image +")"}}>
            <div className="background-blur" style={{backdropFilter: "blur(15px)", position:"absolute", width:"100%", height:"100%", zIndex:1}}></div>
            <h1>FAMOUS ARTWORK</h1>
            <div className="work-main-cont">
            {
                works.map((value,index)=>{
                    return(
                       <WorksCont  data={value} index={index}/>
                    )
                })
            }
            </div>
           
        </div>
    )
}









const itemTime = [
    {
        year:1942,
        event:"Born at Malabon, Philippines"
    },
    {
        year:1962,
        event:"Second Prize, Painting, Shell National Student Art Competition"
    },
    {
        year:1963,
        event:"Received his bachelor's degree in Fine Arts at University of the Phillippines"
    },
    {
        year:1967,
        event:`First Prize, Photography, 20th Art Association of the Philippines (AAP)
        Second Prize, Photography, 20th AAP Annual Exhibition & Competition
        Third Honorable Mention, Photography, 20th AAP Annual Exhibition & Competition`
    },
    {
        year:1969,
        event:"Philippine Representative, VI Paris Biennale"
    },
    {
        year:1969,
        event:"Married British journalist Caroline Kennedy"
    },
    {
        year:1970,
        event:"Thirteen Artists Award, Cultural Center of the Philippines"
    },
    {
        year:1971,
        event:"Eldest son was born, named Elisar"
    },
    {
        year:1972,
        event:"Filipino pioneer of the arts and a significant influence among his peers"
    },
    {
        year:1973,
        event:"Middle child was born on Manila, named Mayumi"
    },
    {
        year:1977,
        event:"Youngest was born, named Jasmine"
    },
    {
        year:1985,
        event:"16-year marriage with Kennedy ended in divorce. Went back to Philippines"
    },
    {
        year:1988,
        event:"Kalinangan (Cultural) Award For Painting, City of Manila"
    },
    {
        year:1990,
        event:"When the 1990 Luzon earthquake struck, BenCab and the BAG helped out by instituting programs such as the ArtAid workshop for traumatized children, and a fund-raising art auction they titled 'Artquake'"
    },
    {
        year:1992,
        event:"CCP Awards For The Arts for Visual Arts, Cultural Center of the Philippines"
    },
    {
        year:1993,
        event:"Chairman, 4th Baguio Arts Festival"
    },
    {
        year:1994,
        event:"Most Outstanding Kapampangan For Arts & Culture (Painting) Award, given by President Ramos on Pampanga Day"
    },
    {
        year:1997,
        event:`ASEAN Achievement Award, for Visual & Performing Arts, 5th ASEAN Achievement Awards, ASEAN Business Forum, Jakarta
        Outstanding Citizen of Baguio Award for Arts, given by the mayor of Baguio on the city’s 88th Foundation Day`

    },
    {
        year:2005,
        event:`Invited by the Singapore Tyler Print Institute to join their Visiting Artists Programme as artist-in residence for one month working on large-scale prints & paperpulp painting.`
        
    },
    {
        year:2006,
        event:`Conferred the Order of National Artist for Visual Arts by President Gloria Macapagal-Arroyo in Malacanan Palace.`
        
    },
    {
        year:2011,
        event:`Holy Angel University Juan D. Nepomuceno Cultural Award for Outstanding Achievement in the Arts`
        
    },
]