import { AppRouter } from './router/appRouter'
import { withProviders } from './providers'

const App = () => <AppRouter />

export default withProviders(App)
