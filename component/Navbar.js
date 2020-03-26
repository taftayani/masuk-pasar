

export default class index extends React.Component {

    constructor() {
        super()
        this.state = {
            tab: 'customer'
        }
    }
    render() {
        return (

            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light"
                    style={{ paddingTop: '20px', paddingBottom: '20px', boxShadow: '4px 4px 10px #DBD4D4' }}>
                    <div className="container-fluid">
                        <a style={{ marginRight: '40px' }} class="navbar-brand" href="#"><img src="/static/Logo/logo.svg" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link active-dashboard" href="#">Data Pasar <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link no-active-dashboard" href="#">Input Pesanan</a>
                                </li>
                            </ul>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <div className="container">
                                <div className="row" style={{marginLeft:'auto'}}>
                                  <a class="nav-link logut-dashboard" href="/">Keluar <span class="sr-only">(current)</span></a>
                                  <a class="nav-link logut-dashboard" href="/">Keluar <span class="sr-only">(current)</span></a>
                               
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </nav>
            </div>
        )
    }

}
