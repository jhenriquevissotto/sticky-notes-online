import containers  from './containers'
import controllers from './controllers'

// ts
import { Containers } from './containers'
import { Controllers } from './controllers'

export interface Components {
    containers: Containers
    controllers: Controllers
}

const components = {
    containers,
    controllers,
}


export default components