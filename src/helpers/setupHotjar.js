import { hotjar } from 'react-hotjar';
import config from "./../config";

export function setupHotjar() {
    if (config.hotjar?.id) {
        let snippetVersion = config.hotjar?.snippetVersion ? config.hotjar?.snippetVersion : 6;
        
        hotjar.initialize(config.hotjar.id, snippetVersion);
    }
}