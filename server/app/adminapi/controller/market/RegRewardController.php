<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\controller\market;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\market\RegRewardLogic;
use think\response\Json;

/**
 * 注册奖励管理
 */
class RegRewardController extends BaseAdminController
{
    /**
     * @notes 奖励配置详情
     * @return Json
     * @author fzr
     */
    public function detail(): Json
    {
        $detail = RegRewardLogic::detail();
        return $this->data($detail);
    }

    /**
     * @notes 奖励配置保存
     * @return Json
     * @author fzr
     */
    public function save(): Json
    {
        $result = RegRewardLogic::save($this->request->post());
        if ($result === false) {
            return $this->fail(RegRewardLogic::getError());
        }
        return $this->success('操作成功', [], 1, 1);
    }
}