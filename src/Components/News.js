import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: 8,
        country: "in",
        category: "general"
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }
    
    article = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Juliet Macur, Andrew Keh",
            "title": "Kamila Valieva Can Continue to Compete, Arbitrators Rule - The New York Times",
            "description": "The ruling, related to questions around use of a banned substance, means Kamila Valieva can take the ice Tuesday when the women’s short program begins.",
            "url": "https://www.nytimes.com/2022/02/14/sports/olympics/kamila-valieva-ruling.html",
            "urlToImage": "https://static01.nyt.com/images/2022/02/14/world/14olympics-briefing-skating-kamila-sub/merlin_201984831_31c944fd-d6cf-4ceb-95f5-989da0159f78-facebookJumbo.jpg",
            "publishedAt": "2022-02-14T08:12:07Z",
            "content": "Matthieu Reeb, the director general of the court, announced the ruling at a news conference in Beijing on Monday, less than 30 hours before the womens event was to begin. He lamented the delay in pro… [+1463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Horizon Forbidden West Review - IGN",
            "description": "Horizon Forbidden West reviewed on PlayStation 5 by Simon Cardy.A triumphant combination of enthralling combat, top-tier creature and character design, and a...",
            "url": "https://www.youtube.com/watch?v=veLQ2cdyBBo",
            "urlToImage": "https://i.ytimg.com/vi/veLQ2cdyBBo/hqdefault.jpg",
            "publishedAt": "2022-02-14T08:00:31Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Xiaofei Xu and Lauren Kent, CNN",
            "title": "'Freedom Convoy' protesters enter Paris and block traffic before they're dispersed with tear gas - CNN",
            "description": "Protesters in a so-called \"Freedom Convoy\" made it past police checkpoints in central Paris on Saturday, with demonstrators completely blocking traffic in the French capital before they were met with tear gas fired by officers.",
            "url": "https://www.cnn.com/2022/02/12/europe/france-freedom-convoy-truckers-protest-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220212112857-01-freedom-convoy-france-0212-super-tease.jpg",
            "publishedAt": "2022-02-14T07:31:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": null,
            "title": "Super Bowl 2022: Rams defeat Bengals, MVP revealed, more live updates - New York Post ",
            "description": "Follow Super Bowl 2022 between the Cincinnati Bengals and Los Angeles Rams with the New York Post’s live updates on the score, highlights, halftime show and more.",
            "url": "https://nypost.com/2022/02/13/live-updates-super-bowl-2022-score-highlights-halftime-show/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/superbowl-2022.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2022-02-14T07:22:00Z",
            "content": "Super Bowl 2022 is finally upon us. The Rams and Bengals square off for the Lombardi Trophy on Sunday night at SoFi Stadium in Los Angeles. Check here for updates on the biggest pregame moments, in-g… [+69 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Charles Robinson",
            "title": "Aaron Donald's retirement talk feels more like a message about his underpaid contract with Rams - Yahoo Sports",
            "description": "Four other defensive players outpace Donald in average annual salary — and a multitude of others will bypass him if he plays out the next three years of his ...",
            "url": "https://sports.yahoo.com/aaron-donalds-retirement-talk-feels-more-like-a-message-about-his-underpaid-contract-with-rams-071840350.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/DvqV1KRqVNac8bKvUQqEHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTI-/https://s.yimg.com/os/creatr-uploaded-images/2022-02/30fb9bf0-8d62-11ec-bdb5-ea78959ca71d",
            "publishedAt": "2022-02-14T07:18:00Z",
            "content": "INGLEWOOD, Calif. Aaron Donald is underpaid. He was underpaid coming into the season, underpaid coming into the Super Bowl, and now hes underpaid heading into an offseason where a great many defender… [+4297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Dan Graziano",
            "title": "Rams' Cooper Kupp delivers again - Amid the team's 'all-in' moves, the star third-round receiver leads them to victory, wins Super Bowl MVP - ESPN",
            "description": "Yes, the Rams went \"all-in\" with big trades and signings. But don't forget about foundational players -- including the third-round pick who caught the Super Bowl's game-winning TD.",
            "url": "https://www.espn.com/nfl/story/_/id/33284132/rams-cooper-kupp-delivers-again-amid-team-all-moves-star-third-round-receiver-leads-victory-wins-super-bowl-mvp",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0214%2Fr974177_1296x729_16%2D9.jpg",
            "publishedAt": "2022-02-14T06:56:28Z",
            "content": "INGLEWOOD, Calif. -- The story we've been told about the Los Angeles Rams is that they \"went all-in\" to win this particular Super Bowl. That they were willing to mortgage their future for it. That wh… [+9818 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Rob Gillies",
            "title": "Key US-Canada bridge reopens after police clear protesters - Associated Press",
            "description": "WINDSOR, Ontario (AP) — The busiest U.S.-Canada border crossing reopened late Sunday after protests against COVID-19 restrictions closed it for almost a week, while Canadian officials held back from a crackdown on a larger protest in the capital, Ottawa.",
            "url": "https://apnews.com/article/coronavirus-pandemic-business-health-canada-blockades-65453655bfffcd349388c283d14f972a",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/a3c9ae935f8848dba33b41ff12ec92ab/3000.jpeg",
            "publishedAt": "2022-02-14T06:29:06Z",
            "content": "WINDSOR, Ontario (AP) The busiest U.S.-Canada border crossing reopened late Sunday after protests against COVID-19 restrictions closed it for almost a week, while Canadian officials held back from a … [+8881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KOAT New Mexico"
            },
            "author": "Sam Smith",
            "title": "Random stabbing spree in Albuquerque leaves eleven wounded - KOAT New Mexico",
            "description": "Stabbing spree covers seven different areas along Central Ave.",
            "url": "https://www.koat.com/article/multiple-stabbings-in-albuquerque/39065715",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/multiple-stabbings-in-northeast-albuquerque-1644790642.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2022-02-14T05:43:00Z",
            "content": "Eleven people were injured in a random stabbing spree along Central Avenue, Sunday in Albuquerque. One suspect is in custody.\r\nA spokesman for the Albuquerque Police Department says the stabbings wer… [+601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "BBC",
            "title": "India bourse head was a 'puppet' of unnamed yogi, regulators say - Yahoo News",
            "description": "Chitra Ramkrishna allegedly shared business plans, meeting agendas and financial projections with the guru.",
            "url": "https://news.yahoo.com/india-bourse-head-puppet-unnamed-052642696.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/nHTgekHq.BcvL9oJ5jgJgQ--~B/aD01NDk7dz05NzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/bbc_us_articles_995/6ae0f99cbcffc3711fe1e4de18a84934",
            "publishedAt": "2022-02-14T05:31:30Z",
            "content": "Chitra Ramkrishna left her role at the National Stock Exchange in 2016\r\nThe former chief executive of India's largest bourse made crucial decisions by consulting and sending confidential information … [+3873 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Oil prices climb more than 1% to 7-year highs on supply disruption fears - Reuters",
            "description": "Oil prices on Monday hit their highest in more than seven years on fears that a possible invasion of Ukraine by Russia could trigger U.S. and European sanctions that would disrupt exports from the world's top producer in an already tight market.",
            "url": "https://www.reuters.com/business/energy/oil-prices-clamber-towards-7-year-highs-russia-ukraine-tensions-2022-02-14/",
            "urlToImage": "https://www.reuters.com/resizer/raaUsqoNitFnNFa6xHwCcq5X54E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SJQYKQ4NHZLTNNDJNUFKSDHZ6U.jpg",
            "publishedAt": "2022-02-14T05:19:00Z",
            "content": "SINGAPORE, Feb 14 (Reuters) - Oil prices on Monday hit their highest in more than seven years on fears that a possible invasion of Ukraine by Russia could trigger U.S. and European sanctions that wou… [+2658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Kimberly Nordyke",
            "title": "Ivan Reitman, ‘Animal House’ Producer and ‘Ghostbusters’ Director, Dies at 75 - Hollywood Reporter",
            "description": "Ivan Reitman, the influential filmmaker and producer behind beloved comedies from Animal House to Ghostbusters, has died. He was 75. Reitman died peacefully in his sleep Saturday night at his home in Montecito, Calif., his family told The Associated Press. “O…",
            "url": "https://www.hollywoodreporter.com/movies/movie-news/ivan-reitman-dead-animal-house-ghostbusters-1235092959/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/02/GettyImages-1353504563-H-2022.jpg?w=1024",
            "publishedAt": "2022-02-14T05:09:19Z",
            "content": "Ivan Reitman, the influential filmmaker and producer behind beloved comedies from Animal House to Ghostbusters, has died. He was 75.\r\nReitman died peacefully in his sleep Saturday night at his home i… [+6483 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KMBC Kansas City"
            },
            "author": "KMBC 9 News Staff",
            "title": "'No survivors' after fiery plane crash at Johnson County Executive Airport - KMBC Kansas City",
            "description": "Area expected to remain closed into Monday",
            "url": "https://www.kmbc.com/article/johnson-county-kansas-executive-airport-plane-crash-fire/39063309",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/joco-crash-png-1644774047.png?crop=0.876xw:0.807xh;0,0&resize=1200:*",
            "publishedAt": "2022-02-14T03:24:00Z",
            "content": "OLATHE, Kan. —Authorities in Olathe, Kansas, are investigating a serious plane crash and fire at the Johnson County Executive Airport that happened around 10:30 Sunday morning.\r\n Officials with the O… [+557 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Natasha Bertrand, Jasmine Wright, Donald Judd and Matthew Chance, CNN",
            "title": "Biden tells Ukraine's Zelensky that US would respond 'swiftly and decisively' to any further Russian aggression - CNN",
            "description": "President Joe Biden told Ukrainian President Volodymyr Zelensky in a roughly hour-long call Sunday that the US would respond \"swiftly and decisively\" if Russia takes further steps toward invasion, according to a White House readout of the call.",
            "url": "https://www.cnn.com/2022/02/13/politics/biden-zelensky-call/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220103023851-biden-zelensky-split-dec-2021-super-tease.jpg",
            "publishedAt": "2022-02-14T03:22:00Z",
            "content": "(CNN)President Joe Biden told Ukrainian President Volodymyr Zelensky in a roughly hour-long call Sunday that the US would respond \"swiftly and decisively\" if Russia takes further steps toward invasio… [+3346 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Senate ad slams transgender athletes 'pretending to be women' - POLITICO",
            "description": "Criticizing collegiate swimmer Lia Thomas, Missouri GOP Rep. Vicky Hartzler says she “won’t look away while woke liberals destroy women’s sports.”",
            "url": "https://www.politico.com/news/2022/02/13/missouri-senate-ad-slams-transgender-athletes-00008540",
            "urlToImage": "https://static.politico.com/c1/31/793b4e344f14b0fcfc3ee39a9e14/https-delivery.gettyimages.com/downloads/906623588",
            "publishedAt": "2022-02-14T03:17:07Z",
            "content": "Some people are afraid to talk about it. Not me, Hartzler said in the 30-second spot, explaining that she wont look away while woke liberals destroy womens sports.\r\nWomens sports are for women, not m… [+2334 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Devan Cole, CNN",
            "title": "Moderate GOP governor tears into party's direction: 'I think they're focused on the wrong things' - CNN",
            "description": "Republican Gov. Larry Hogan of Maryland criticized his party Sunday for being \"focused on the wrong things,\" saying its preoccupation with the results of the 2020 election is holding it back from having \"a positive, hopeful vision for America.\"",
            "url": "https://www.cnn.com/2022/02/13/politics/larry-hogan-republican-party-criticism-cnntv/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211220104522-01-larry-hogan-0805-super-tease.jpg",
            "publishedAt": "2022-02-14T03:11:00Z",
            "content": "Washington (CNN)Republican Gov. Larry Hogan of Maryland criticized his party Sunday for being \"focused on the wrong things,\" saying its preoccupation with the results of the 2020 election is holding … [+2266 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Mania"
            },
            "author": "Adam Guillen Jr.",
            "title": "UFC 271 results: Matches to make for ‘Adesanya vs. Whittaker 2’ main card winners - MMA Mania",
            "description": "UFC 271 results: It’s time to see what could be next for all of the main card winners from last night’s “Adesanya vs. Whittaker 2”-led event in Houston, Texas.",
            "url": "https://www.mmamania.com/2022/2/13/22922157/ufc-271-results-matches-to-make-adesanya-whittaker-2-main-card-winners-espn-mma",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/kxzNQA0AjIszIIowcPgYUwhuvWU=/0x0:4671x2446/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23238689/1370247354.jpg",
            "publishedAt": "2022-02-14T03:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Monique Beals",
            "title": "Lam says 'onslaught' of COVID-19 cases has 'overwhelmed' Hong Kong | TheHill - The Hill",
            "description": "Hong Kong's leader Carrie Lam said on Monday that record-hig...",
            "url": "https://thehill.com/policy/international/594073-lam-says-onslaught-of-covid-19-cases-has-overwhelmed-hong-kong",
            "urlToImage": "https://thehill.com/sites/default/files/hongkong_040720getty.jpg",
            "publishedAt": "2022-02-14T02:23:38Z",
            "content": "Hong Kong's leader Carrie Lam said on Monday that record-high COVID-19 infection rates amid the global omicron wave have \"overwhelmed\" the city.\r\n\"The onslaught of the fifth wave of the epidemic has … [+1654 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chaim Gartenberg",
            "title": "The first trailer for The Lord of the Rings: The Rings of Power debuts at the Super Bowl - The Verge",
            "description": "Amazon’s The Lord of the Rings: The Rings of Power TV show got its first trailer during the Super Bowl, showing off a return to Middle Earth in the Second Age and characters old and new (including Elrond and Galadriel).",
            "url": "https://www.theverge.com/2022/2/13/22923339/lord-of-the-rings-trailer-super-bowl-amazon",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/bsGgR6QUD-LDkJ7d1kCSJLRkSp4=/364x0:2996x1378/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23239870/Screen_Shot_2022_02_13_at_8.44.38_PM.png",
            "publishedAt": "2022-02-14T01:46:57Z",
            "content": "One (Super Bowl) ring to rule them all"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Mike Vulpo",
            "title": "Jennifer Lopez Dancing Next to Ben Affleck at Super Bowl 2022 Has Us On the Floor - E! NEWS",
            "description": "While celebrating the success of her new film Marry Me, Jennifer Lopez takes a break from work to “Live It Up” at Super Bowl 2022. All the details on her date night with Ben Affleck.",
            "url": "https://www.eonline.com/news/1319660/jennifer-lopez-dancing-next-to-ben-affleck-at-super-bowl-2022-has-us-on-the-floor",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202219/rs_1200x1200-220209094820-1200-Ben-Affleck-Jennifer-Lopez-LT-2922-GettyImages-1369481317.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2022-02-14T01:46:00Z",
            "content": "She's gonna dance and love and dance again!\r\nAs Jennifer Lopez continues to celebrate the success of her new romantic comedy Marry Me, the actress decided to step away from work and experience Super … [+684 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "ANDREW DALTON",
            "title": "Super Bowl: 50 Cent hangs upside down, Guyton slows it down - Yahoo Entertainment",
            "description": "INGLEWOOD, Calif. (AP) — 50 Cent made a surprise upside-down entrance at the Super Bowl halftime show, and Eminem dramatically took a knee.  The show brought...",
            "url": "https://sports.yahoo.com/guyton-slows-down-rock-turns-012802680.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/TrTSn6f8kfCs6vr4NEgCxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/XHmTKqRCRBb9hcsDtyJURg--~B/aD0yNjcwO3c9NDAwNDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/97e6a12302014ef6e216a5509155cff3",
            "publishedAt": "2022-02-14T01:44:07Z",
            "content": "INGLEWOOD, Calif. (AP) 50 Cent made a surprise upside-down entrance at the Super Bowl halftime show, and Eminem dramatically took a knee.\r\nThe show brought about as much hip-hop as a stadium can hold… [+5845 chars]"
        }
    ]
    constructor(props) {
        super(props);
        console.log("hello this is constructor in news");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0
        }
        document.title = this.capitalizeFirstLetter(this.props.category) + " - NewsHunt";
    }

    capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    async updatenews() {
        this.props.progress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.progress(10);
        let data = await fetch(url);
        this.props.progress(40);
        let parsedData = await data.json();
        this.props.progress(60);
        console.log(parsedData);
        this.props.progress(80);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
        this.props.progress(100);

    }
    async componentDidMount() {
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ 
        //     articles: parsedData.articles,
        //     totalArticles:parsedData.totalResults,
        //     loading:false
        //  });

        this.updatenews();
    }
    handlePreviousClick = async () => {
        // console.log("previous");
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page:this.state.page-1,
        //     articles: parsedData.articles ,
        //     loading:false
        // })
        this.state.page -= 1;
        this.updatenews();
    }
    handleNextClick = async () => {
        console.log("next");
        if (this.state.page + 1 <= Math.ceil(this.state.totalArticles / this.props.pageSize)) {
            // console.log("done next")
            // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true})
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // console.log(parsedData);
            // this.setState({
            //     page:this.state.page+1,
            //     articles: parsedData.articles ,
            //     loading:false
            // })
            this.setState({ page: this.state.page + 1 });
            this.updatenews();
        }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults,
            loading: false
        });

    }
    render() {
        return (
            <>

                <div >

                    <h2 className="text-center" style={{marginTop: "70px"}}>NewsHunt - {this.capitalizeFirstLetter(this.props.category)} NEWS HEADLINES</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalArticles}
                        loader={<Spinner />}
                    >
                        <div className="container">

                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
                {/* <div className="container d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&#8592;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
                </div> */}
            </>
        )
    }
}

export default News
