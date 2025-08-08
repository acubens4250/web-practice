import { request } from "./api.js"
import Header from "./Header.js"
import SearchResults from "./SearchResult.js"
import SuggestKeywords from "./SuggestKeywords.js"

export default function App({ $target }){
    this.state = {
        keyword: '',
        keywords: [],
        catImages: []
    }
    this.setState = nextState => {
        this.state = nextState

        if(this.state.keyword !== nextState.keyword) {
            header.setState({
                keyword: this.state.keyword
            })
        }
        suggestKeywords.setState({
            keywords: this.state.keywords
        })

        if(this.state.catImages.length > 0) {
            searchResults.setState(this.state.catImages)
        }
    }
    const header = new Header({ 
        $target, 
        initialState: {
            keyword: this.state.keyword
        },
        onKeywordInput: async (keyword) => {
            if(keyword.trim().length > 1) {
                const keywords = await request(`/keywords?q=${keyword}`)

                this.setState({
                    ...this.state,
                    keywords
                })
            }
        },
        onEnter: () => {
            fetchCatsImage()
        }
    })

    const suggestKeywords = new SuggestKeywords({
        $target,
        initialState: {
            keywords: this.state.keywords,
            cursor: -1
        },
        onKeywordSelect: (keyword) => {
            this.setState({
                ...this.state,
                keyword,
                keywords: []
            })
            fetchCatsImage()
        }
    })  

    const searchResults = new SearchResults({
        $target,
        initialState: this.state.catImages
    })

    const fetchCatsImage = async () => {
        const encodedKeyword = encodeURIComponent(this.state.keyword)
        const res = await request(`/search?q=${encodedKeyword}`)

        if (res && res.data) {
            this.setState({
                ...this.state,
                catImages: res.data,
                keywords: []
            })
        } else {
            // 검색 결과가 없거나 API 실패 시
            this.setState({
                ...this.state,
                catImages: [],
                keywords: []
            })
            alert('해당 키워드에 대한 이미지를 불러오지 못했습니다.')
        }
    }
}