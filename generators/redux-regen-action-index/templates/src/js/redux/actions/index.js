/**
 * BE CAREFUL!!
 * This file has been auto generated by the yeoman generator:
 *  <%= generatorName %>
 * Any manual changes made to its contents could be overwritten by the
 * yeoman generator when it is run again.
 */
import actionUtils from './utils/action-utils';

<% actionList.forEach((action) => { -%>
import <%= action.definitionVar -%> from './<%= action.fileName -%>';
<% }) -%>

<% actionList.forEach((action) => { -%>
export const <%= action.actionsVar -%> = actionUtils.createActionSet(<%= action.definitionVar -%>);
<% }) -%>
