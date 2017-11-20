/**
 * Created by hao.zuo on 2017/8/17.
 */
import uuid from 'uuid';

import FolderBox from './folderBox';


/** ****************** Component ****************** */
const FolderColumn = () =>
  (<div className="folder-column">
    <FolderBox key={uuid.v1()} />
    <FolderBox key={uuid.v1()} />
    <FolderBox key={uuid.v1()} />
    <FolderBox key={uuid.v1()} />
   </div>);

/** ****************** Exports ****************** */
export default FolderColumn;
