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

namespace app\api\controller\chat;

use app\api\controller\BaseApiController;
use app\api\logic\chat\ChatDialogLogic;
use Exception;
use JetBrains\PhpStorm\NoReturn;

/**
 * GPT对话管理类
 */
class ChatDialogController extends BaseApiController
{
    /**
     * @notes 发起对话
     * @throws Exception
     */
    #[NoReturn]
    public function completions(): void
    {
        $params = $this->request->post();
        (new ChatDialogLogic($params, $this->userId))->chat();
        exit();
    }
}