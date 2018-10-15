// Returns the width, as an integer, as a percent of the total width.
export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
    return parseInt(totalWidth * (percent / 100), 10);
}