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

namespace app\common\model\draw;

use app\common\enum\draw\DrawRecordEnum;
use app\common\enum\draw\DrawEnum;
use app\common\model\BaseModel;
use app\common\service\ConfigService;
use think\model\concern\SoftDelete;

/**
 * 绘画记录
 * Class DrawRecords
 * @package app\common\model\draw
 */
class DrawRecords extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 审核状态
     * @param $value
     * @param $data
     * @return string
     * @author mjf
     * @date 2024/1/26 15:50
     */
    public function getCensorStatusTextAttr($value, $data): string
    {
        return DrawRecordEnum::getCensorStatusDesc($data['censor_status']);
    }

}