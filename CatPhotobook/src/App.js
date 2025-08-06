import { request } from './api.js'
import ImageViewer from './ImageViewer.js'
import Nodes from './Nodes.js'
import Loading from './Loading.js'

export default function App({ $target }) {
    this.state = {
        isRoot: true,
        isLoading: true,
        nodes: [],
        paths: []
    }
    const loading = new Loading({
        $target
    })

    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
            selectedImageUrl: null
        },
        onClick: async (node) => {
            if(node.type === 'DIRECTORY') {
                await fetchNodes(node.id)
                this.setState({
                    ...this.state,
                    paths: [...this.state.paths, node]
                })
            }     

            if(node.type === 'FILE') {
                this.setState({
                    ...this.state,
                    selectedImageUrl: `https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}`
                })
            }       
        },
        onPrevClick: async () => {
            const nextPaths = [...this.state.paths]
            nextPaths.pop()
            this.setState({
                ...this.state,
                paths: nextPaths
            })

            if(nextPaths.length === 0) {
                await fetchNodes()
            } else {
                await fetchNodes(nextPaths[nextPaths.length - 1].id)
            }
        }
    })

    const imageViewer = new ImageViewer({
        $target,
        onClose: () => {
            this.setState({
                ...this.state,
                selectedImageUrl: null
            })
        }
    })

    this.setState = nextState => {
        this.state = nextState

        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })

        imageViewer.setState({
            selectedImageUrl: this.state.selectedImageUrl
        })

        loading.setState(this.state.isLoading)
    }

    const fetchNodes = async (id) => {
        this.setState({
            ...this.state,
            isLoading: true
        })
        const nodes = await request(id ? `/${id}` : '/')

        this.setState({
            ...this.state,
            nodes: nodes || [],
            isRoot: id ? false : true,
            isLoading: false
        })
    }

    fetchNodes()

}