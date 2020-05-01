/**
 * Created by OXOYO on 2019/10/16.
 *
 * 栅格
 *
 * 扩展G6自带Grid插件
 */

import G6 from "@antv/G6";
import modifyCSS from "@antv/util/lib/dom/modify-css";

const Grid = new G6.Grid();

export default class XGrid extends Grid {
  updateGrid(e) {
    const gridContainer = this.get("gridContainer");
    const matrix = e.matrix;
    // 矩阵变换
    const transform =
      "matrix(" +
      matrix[0] +
      "," +
      matrix[1] +
      "," +
      matrix[3] +
      "," +
      matrix[4] +
      "," +
      matrix[6] +
      "," +
      matrix[7] +
      ")";
    modifyCSS(gridContainer, {
      transform
    });
  }
}
