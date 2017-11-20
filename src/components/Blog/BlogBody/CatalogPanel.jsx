/**
 * Created by Zoho on 16/9/16.
 */
// todo

import FolderColumn from './CatalogPanel/FolderColumn';
import CollapseHandler from './CatalogPanel/CollapseHandler';

/** ****************** Component ****************** */
const CatalogPanel = () =>
  (<div className="catalog-panel">
    <CollapseHandler arrow="right" />
    <FolderColumn />
  </div>);

/** ****************** Exports ****************** */
export default CatalogPanel;
