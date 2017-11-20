/**
 * Created by hao.zuo on 2017/8/17.
 */
// todo

/** ****************** Component ****************** */
const CollapseHandler = ({ arrow }) => (
  <div className="collapse-handler">
    <div className="arrow-icon">
      <i
        className={`fa fa-angle-double-${arrow || 'right'}`}
        aria-hidden="true"
      />
    </div>
  </div>
);

/** ****************** Exports ****************** */
export default CollapseHandler;
