export default function Nodes({ $target, initialState, onClick, onPrevClick }) {
    const $nodes = document.createElement('div')
    $target.appendChild($nodes)
    $nodes.classList.add('nodes')
    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const { isRoot, nodes } = this.state

        $nodes.innerHTML = `
            ${isRoot ? '' : `
                <div class="Node">
                    <img src="https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/images/prev.png">                
                </div>
            `}
            
            ${nodes.map(node => `
                <div class="Node" data-id="${node.id}">
                    <img src="${node.type === "DIRECTORY" ? 
                        "https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/images/directory.png" :
                        "https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/images/file.png"
                    }">
                    ${node.name}
                </div>
            `).join('')}
        `
    }

    this.render()

    $nodes.addEventListener('click', e => {
        const $node = e.target.closest('.Node')
        if (!$node) return // 클릭한 곳이 Node가 아니면 종료

        const { id } = $node.dataset

        // id가 없는 경우 뒤로가기 처리
        if(!id) {
            onPrevClick()
            return
        }

        const node = this.state.nodes.find(node => node.id === id)

        if(node) {
            onClick(node)
        } else{
            onPrevClick()
        }
    })
}