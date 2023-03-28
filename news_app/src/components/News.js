import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article = [
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "Tal Axelrod",
        "title": "Congress closer to a TikTok ban or forced sale after CEO's concerning testimony, Gallagher says - ABC News",
        "description": "Rep. Mike Gallagher singled out the need for \"control\" of the app's algorithm.",
        "url": "https://abcnews.go.com/Politics/tiktok-ceos-testimony-increased-possibility-congress-passes-ban/story?id=98127912",
        "urlToImage": "https://s.abcnews.com/images/Politics/Mike-Gallagher-2-gty-gmh-230325-_1679766000667_hpMain_16x9_992.jpg",
        "publishedAt": "2023-03-26T15:34:57Z",
        "content": "Last week's testimony from TikTok CEO Shou Zi Chew \"increased the likelihood that Congress will take some action\" on the hugely popular and controversial social media app after his remarks on Capitol… [+5253 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Beast"
        },
        "author": "Corbin Bolies",
        "title": "Donald Trump’s Lawyer Won’t Defend ‘Ill-Advised’ Truth Social Post - Yahoo News",
        "description": "Joe Tacopina claimed he was just a mere litigator, not a “Trump PR” person.",
        "url": "https://www.thedailybeast.com/donald-trumps-lawyer-joe-tacopina-cant-defend-ill-advised-truth-social-post",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_719,w_1280,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1679844020/meet-the-press_joqxyz",
        "publishedAt": "2023-03-26T15:31:31Z",
        "content": "Even Donald Trumps personal lawyer could not defend his deranged social media posts about a potential indictment, admitting on Sunday that a picture of Trump holding a baseball bat next to a photo of… [+1445 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Variety"
        },
        "author": "Rebecca Rubin",
        "title": "Box Office: ‘John Wick 4’ Crushes Franchise Record With $73.5 Million Opening Weekend - Variety",
        "description": "“John Wick: Chapter 4” knocked down the box office competition, collecting a remarkable $73.5 million in its opening weekend. Boosted by positive reviews and enthusiastic word-of-mouth,…",
        "url": "https://variety.com/2023/film/news/john-wick-4-box-office-sets-franchise-record-opening-weekend-1235564839/",
        "urlToImage": "https://variety.com/wp-content/uploads/2023/03/john-wick-chapter-4.jpg?w=999&h=563&crop=1",
        "publishedAt": "2023-03-26T15:12:00Z",
        "content": "“John Wick: Chapter 4” knocked down the box office competition, collecting a remarkable $73.5 million in its opening weekend.\r\nBoosted by positive reviews and enthusiastic word-of-mouth, the fourth i… [+4687 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SheKnows"
        },
        "author": "Delilah Gray",
        "title": "Reese Witherspoon & Jim Toth’s Financial Actions Show They’ve Been Prepping for a Split Longer Than Anyone Realized - Yahoo Life",
        "description": "While Reese Witherspoon and Jim Toth’s divorce took the world by surprise, it wasn’t a big shocker for those closest to them. Many insiders claim that not...",
        "url": "https://www.sheknows.com/entertainment/articles/2742244/reese-witherspoon-jim-toth-money-divorce/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/j3ENa3FcHY9ww2ITuNCjcQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/sheknows_79/cacf405c77ced662ab2001ac43fb9053",
        "publishedAt": "2023-03-26T14:57:22Z",
        "content": "If you purchase an independently reviewed product or service through a link on our website, SheKnows may receive an affiliate commission. \r\nWhile Reese Witherspoon and Jim Toths divorce took the worl… [+2521 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Andy Rose",
        "title": "Actor Jonathan Majors is arrested on assault charge in New York, police say - CNN",
        "description": "Actor Jonathan Majors, who has recently starred in \"Creed III\" and \"Ant-Man and the Wasp: Quantumania,\" was arrested Saturday morning in an alleged domestic dispute, New York police say.",
        "url": "https://www.cnn.com/2023/03/25/us/jonathan-majors-arrest-new-york/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230325221038-jonathan-majors-file-032523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-26T14:56:00Z",
        "content": "Actor Jonathan Majors, who has recently starred in Creed III and Ant-Man and the Wasp: Quantumania, was arrested Saturday morning in an alleged domestic dispute, New York police say.\r\nMajors, 33, was… [+1546 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WPVI-TV"
        },
        "author": null,
        "title": "Chocolate factory explosion: 4 dead after blast at RM Palmer in in West Reading, Pennsylvania - WPVI-TV",
        "description": "\"We're holding onto faith and hope. It just gets more antagonizing as the time goes one,\" the cousin of a missing woman said.",
        "url": "https://6abc.com/chocolate-factory-on-fire-flames-berks-county-west-reading/13020222/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/13020252_032623-wpvi-west-reading-chocolate-factory-explosion-scene-img.jpg?w=1600",
        "publishedAt": "2023-03-26T14:48:45Z",
        "content": "WEST READING, Pennsylvania (WPVI) -- Officials announced that four people are now dead after a devastating explosion at a West Reading, Pennsylvania chocolate factory.\r\nPolice also said in a Sunday m… [+7317 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Austin American-Statesman"
        },
        "author": "Sara Diggins",
        "title": "See photos from Donald Trump's first 2024 campaign rally in Waco, Texas - Austin American-Statesman",
        "description": "Former President Donald Trump held his first 2023 presidential campaign rally in Waco, Texas, on Saturday.",
        "url": "https://www.statesman.com/picture-gallery/news/2023/03/25/former-president-donald-trump-2024-campaign-rally-waco-texas-photos/11538443002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/26/NAAS/d14454b2-4282-455f-b8c2-44405b350efd-Trump_Rally_in_Waco_SED_400.JPG?crop=2399%2C1350%2Cx0%2Cy0&width=1200",
        "publishedAt": "2023-03-26T14:23:00Z",
        "content": null
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Nouran Salahieh, Haley Brink, Holly Yan, Allison Chinchar",
        "title": "An 'extremely dangerous tornado' strikes Georgia as 20 million Southerners are at risk of treacherous weather Sunday - CNN",
        "description": "After a rash of violent storms killed 26 people in the South over the weekend, a new \"large and extremely dangerous tornado\" struck Sunday south of La Grange, Georgia, the National Weather Service in Atlanta said.",
        "url": "https://www.cnn.com/2023/03/26/weather/us-severe-storms-sunday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230326010545-15-mississippi-tornado-032623.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-26T14:04:00Z",
        "content": "After a rash of violent storms killed 26 people in the South over the weekend, a new large and extremely dangerous tornado struck Sunday south of La Grange, Georgia, the National Weather Service in A… [+5313 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Ye Xie",
        "title": "Investors Brace for Another Week of Turmoil as Mad March Ends - Yahoo Finance",
        "description": "(Bloomberg) -- Global financial markets are poised for another week of turmoil, as traders close out a dizzying month in which cascading worries about US and...",
        "url": "https://finance.yahoo.com/news/investors-brace-another-week-turmoil-140000843.html",
        "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/5d451976e81c3a3a34ee67d309fe40dc",
        "publishedAt": "2023-03-26T14:00:00Z",
        "content": "(Bloomberg) -- Global financial markets are poised for another week of turmoil, as traders close out a dizzying month in which cascading worries about US and European lenders dominated sentiment and … [+3357 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Action Network"
        },
        "author": "Action Network Staff",
        "title": "NCAA Tournament Odds, Picks: Our Staff's Best Bets for Sunday's Elite 8 Games, Including Miami vs. Texas (March 26) - The Action Network",
        "description": "Check out NCAA tournament odds and best bets for Sunday's Elite 8 games, including picks for Miami vs. Texas and more.",
        "url": "https://www.actionnetwork.com/ncaab/ncaa-tournament-odds-picks-best-bets-sundays-elite-8-games-miami-vs-texas-march-26",
        "urlToImage": "https://images.actionnetwork.com/blog/2023/03/Jim-Larranaga.jpg",
        "publishedAt": "2023-03-26T13:54:00Z",
        "content": "Florida Atlantic and UConn are the first two teams heading to Texas for the Final Four.\r\nWho will join them, and how is our staff betting Sunday’s two Elite 8 games?\r\nFind out below with the top NCAA… [+6256 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "2023 March Madness live stream: NCAA Tournament TV schedule, watch Elite Eight streaming on Sunday - CBS Sports",
        "description": "Here's everything you need to know heading into Sunday's Elite Eight action",
        "url": "https://www.cbssports.com/college-basketball/news/2023-march-madness-live-stream-ncaa-tournament-tv-schedule-watch-elite-eight-streaming-on-sunday/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/25/57905e3a-e4aa-4c50-8aa6-5e160166ccae/thumbnail/1200x675/5108c77b5c55b6c3804bf225db7e9165/usatsi-20311639-1.jpg",
        "publishedAt": "2023-03-26T13:45:00Z",
        "content": "On Sunday, the last two remaining spots in the Final Four will be decided as the 2023 NCAA Tournament schedule has reached the last day of regional action. It's been a historic and bracket-busting ye… [+4448 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "'I'm the most innocent man in American history' - Trump defiant at rally in Texas - The Telegraph",
        "description": "Donald Trump used the first major rally of his 2024 campaign on Saturday to declare prosecutors have \"nothing\" on him, that the allegations are \"bulls--t,\" a...",
        "url": "https://www.youtube.com/watch?v=nabGjhrb95o",
        "urlToImage": "https://i.ytimg.com/vi/nabGjhrb95o/maxresdefault.jpg",
        "publishedAt": "2023-03-26T13:16:27Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Hartley Charlton",
        "title": "Gurman: iOS 17 to Provide Several 'Most Requested Features' - MacRumors",
        "description": "Apple changed the strategy for iOS 17 later in its development process to add several new features, suggesting that the update may be more...",
        "url": "https://www.macrumors.com/2023/03/26/ios-17-to-provide-several-most-requested-features/",
        "urlToImage": "https://images.macrumors.com/t/2ofw9g5kA2rRBh-5uj9QHg9mBtw=/2250x/article-new/2023/02/iOS-17-on-Phone-Feature.jpg",
        "publishedAt": "2023-03-26T13:05:23Z",
        "content": "Apple changed the strategy for iOS 17 later in its development process to add several new features, suggesting that the update may be more significant than previously thought, Bloomberg's Mark Gurman… [+1456 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MMA Fighting"
        },
        "author": "Alexander K. Lee",
        "title": "Dana White blasts split decision in UFC San Antonio main event: ‘That’s pretty scary’ - MMA Fighting",
        "description": "Dana White doesn’t understand why the judges didn’t give Cory Sandhagen a clear-cut decision win in the UFC San Antonio main event.",
        "url": "https://www.mmafighting.com/2023/3/26/23656948/dana-white-blasts-split-decision-in-ufc-san-antonio-main-event-thats-pretty-scary",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/SPBvfPN9dpbMC6zFUT6uwytQu3o=/0x0:4838x2533/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24537455/1247930303.jpg",
        "publishedAt": "2023-03-26T13:00:00Z",
        "content": "Dana White saw something that one judge didnt on Saturday: A clear-cut win for Cory Sandhagen.\r\nThe bantamweight contender earned a split nod over Marlon Vera in the main event of UFC San Antonio, bu… [+2520 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BuzzFeed News"
        },
        "author": "Amanda Gardner",
        "title": "What Experts Say About Candida Auris, The New “Urgent Threat” To Human Health - BuzzFeed News",
        "description": "Candida auris is a type of yeast that can spread from person to person and is resistant to antifungal treatments. The CDC calls it an “urgent threat.”",
        "url": "https://www.buzzfeednews.com/article/amandagardner/new-fungus-candida-auris-climate-change",
        "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-03/25/23/campaign_images/b01ccdc8dbd7/this-new-fungus-is-a-problem-and-climate-change-m-3-3720-1679787413-0_dblbig.jpg",
        "publishedAt": "2023-03-26T12:46:02Z",
        "content": "What is Candida auris?\r\n First identified in Asia in 2009, C. auris is now found on four continents. In the US, it was initially only found in certain hospitals, nursing homes, and long-term healthca… [+3436 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "Anders Hagstrom",
        "title": "Elon Musk values Twitter at less than half of $44B price tag in offer to employees - Fox Business",
        "description": "Billionaire Twitter CEO Elon Musk offered his employees stock grants that valued the company at $20 billion last week, less than half the $44 billion he bough it for.",
        "url": "https://www.foxbusiness.com/politics/elon-musk-values-twitter-less-than-half-44b-price-tag-offer-employees",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/MUSK.jpg?ve=1&tl=1",
        "publishedAt": "2023-03-26T12:22:23Z",
        "content": "Billionaire Twitter CEO Elon Musk valued his company at less than half the price he purchased it for in a stock option offer to employees last week.\r\nMusk gave stock grants to employees in an email e… [+2273 chars]"
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "Kyle Balluck, Stephen Neukam",
        "title": "Biden nominee to lead FAA withdraws amid GOP criticism - The Hill",
        "description": "Phillip Washington, President Biden’s pick to lead the Federal Aviation Administration (FAA), has withdrawn his nomination amid criticism from Senate Republicans. Transportation Secretary Pete Buttigieg cited “undeserved” attacks in confirming Washington’s wi…",
        "url": "https://thehill.com/homenews/administration/3918627-biden-nominee-to-lead-faa-withdraws-amid-gop-criticism/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/03/641fbd4c296dc4.19336438.jpeg?w=1280",
        "publishedAt": "2023-03-26T11:50:00Z",
        "content": "Skip to content\r\nPhillip Washington, President Biden’s pick to lead the Federal Aviation Administration (FAA), has withdrawn his nomination amid criticism from Senate Republicans.\r\nTransportation Sec… [+2361 chars]"
    },
    {
        "source": {
            "id": "marca",
            "name": "Marca"
        },
        "author": "Marca",
        "title": "Emily Ratajkowski and Harry Styles' romance: The pair are spotted kissing in Japan - Marca English",
        "description": "It seems that One Direction star Harry Styles and model Emily Ratajkowski are the latest hot celebrity couple.\nStyles and Ratajkowski were caught engaging in a passionate public di",
        "url": "https://www.marca.com/en/lifestyle/celebrities/2023/03/26/642026e746163f062d8b458d.html",
        "urlToImage": "https://phantom-marca.unidadeditorial.es/41545130895fc80fd176c2adbc6468df/resize/1200/f/jpg/assets/multimedia/imagenes/2023/03/26/16798282285124.jpg",
        "publishedAt": "2023-03-26T11:31:11Z",
        "content": "It seems that One Direction star Harry Styles and model Emily Ratajkowski are the latest hot celebrity couple.\r\nStyles and Ratajkowski were caught engaging in a passionate public display of affection… [+2247 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "See how Putin defended tactical nuclear weapons move - CNN",
        "description": null,
        "url": "https://www.youtube.com/watch?v=hfml76IswIM",
        "urlToImage": null,
        "publishedAt": "2023-03-26T11:28:46Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
        "source": {
            "id": null,
            "name": "The Times of Israel"
        },
        "author": null,
        "title": "Knesset to see decisive week for Supreme Court, as cracks appear in coalition - The Times of Israel",
        "description": "Core judicial overhaul plan to put coalition in control of appointing judges about to become law, amid mini-rebellion in Likud over pushing legislative pace despite societal rifts",
        "url": "https://www.timesofisrael.com/knesset-to-see-decisive-week-for-supreme-court-as-cracks-appear-in-coalition/",
        "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/03/F230320EM116-1024x640.jpg",
        "publishedAt": "2023-03-26T10:22:16Z",
        "content": "With only days until the Knesset breaks for its April recess, the coalition is sprinting to close core elements of its judicial overhaul amid a mini-internal rebellion, in what is poised to be the mo… [+6939 chars]"
    }
]

  constructor(){
    super();
    this.state = {
      article:this.article,
      loading:false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsPoint top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="this is the title" description="this is the description" imageURL="https://s.abcnews.com/images/Politics/Mike-Gallagher-2-gty-gmh-230325-_1679766000667_hpMain_16x9_992.jpg" newsURL="todo"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="this is the title" description="this is the description"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="this is the title" description="this is the description"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
