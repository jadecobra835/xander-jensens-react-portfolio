import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusCircle,
    faPhoneFlip,
    faEnvelope,
    faLocationDot 
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusCircle, 
    faPhoneFlip,
    faEnvelope,
    faLocationDot );
};

export default Icons;