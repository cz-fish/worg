import './App.css';

import {Layout} from 'antd';

import DetailPane from './DetailPane.js';
import ListPane from './ListPane.js';
import SearchBar from './SearchBar.js';

import SplitPane from 'react-split-pane';


const { Header, Sider, Content } = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="top-level">
                <Header>
                    <SearchBar/>
                </Header>
                <Layout>
                    <SplitPane split="vertical" primary="second" minSize={350} style={{position: "fixed"}}>
                            <ListPane entities={[
                                { id: 1},
                                { id: 2},
                                { id: 3},
                                ]}/>
                            <DetailPane/>
                    </SplitPane>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
