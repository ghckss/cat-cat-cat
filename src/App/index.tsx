import React, {createContext, FC} from 'react';
import {Route, Switch} from 'react-router';

import {Container, Main} from './styles';
import AsyncComponent from 'components/AsyncComponent';
import {Path} from 'Constants';

interface MyContext {}

const Home = AsyncComponent(() => import('pages/Home'));
const Board = AsyncComponent(() => import('pages/Board'));
const Request = AsyncComponent(() => import('pages/Request'));

export const AppContext = createContext<MyContext>({});

const App: FC = () => {
    return (
        <AppContext.Provider value={{}}>
            <Container>
                <Main>
                    <Switch>
                        <Route component={Home} path={Path.Home} exact />
                        <Route component={Board} path={Path.Board} />
                        <Route component={Request} path={Path.Request} />
                    </Switch>
                </Main>
            </Container>
        </AppContext.Provider>
    );
};

export default App;
