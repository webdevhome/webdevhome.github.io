import { AppModeActions } from './appMode/appModeActions'
import { HiddenLinksActions } from './hiddenLinks/hiddenLinksActions'
import { SearchActions } from './search/searchActions'

export type AppActions = AppModeActions | HiddenLinksActions | SearchActions
