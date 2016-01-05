"use strict"

import {Dispatcher} from 'flux';
import {contains} from '../constants/constant'

var PayloadSources = contains.PayloadSources;
class SmallDispatcher extends Dispatcher {
	handleServerAction(action) {
		let payload = {
			source: PayloadSources.SERVER_ACTION,
			action: action
		}
		this.dispatch(payload)
	}

	handleViewAction(action) {
		let payload = {
			source: PayloadSources.VIEW_ACTION,
			action: action
		}
		this.dispatch(payload)
	}
}

export default new SmallDispatcher()