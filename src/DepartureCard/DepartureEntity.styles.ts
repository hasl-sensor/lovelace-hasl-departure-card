import {css} from 'lit'

const lineColorsStyles = css`
    .line-icon {
        border-radius: 3px;
        padding: 3px 3px 0 3px;
        color: #fff;
        min-width: 22px;
        height: 22px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    }

    .red {
        background-color: #d71d24;
    }
    .blue {
        background-color: #0089ca;
    }
    .green {
        background-color: #179d4d;
    }

    .train {
        background-color: #ec619f;
    }

    .tram {
        background-color: #985141;
    }

    .tram_7 {
        background-color: #878a83;
    }

    .tram_12 {
        background-color: #778da7;
    }

    .tram_21 {
        background-color: #b76020;
    }

    .tram_22 {
        background-color: #d77d00;
    }
    `

const departureEntityStyles = css`
    .name {
        display: flex;
        padding: 8px 0 0 8px;
        font-weight: 400;
        font-size: large;
    }
    .header {
        padding: 4px 0px 12px;
        font-size: medium;
        font-weight: 400;
        font-family: var(--paper-font-headline_-_font-family);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
    }
    .row {
        height: 40px;
    }

    .table {
        display: table;
        width: 100%;
    }
    .table-header {
        display: table-header-group;
    }
    .table-body {
        display: table-row-group;
    }
    .table .row {
        display: table-row;
    }
    .table .col {
        display: table-cell;
        vertical-align: middle;
    }
    .table .col.small {
        width: 0;
    }

    .transport-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .pl2 {
        padding-left: 16px;
    }
    .mr1 {
        margin-right: 8px;
    }
    .updated {
        padding-left: 16px;
        padding-top: 8px;
        font-size: smaller;
    }

    .center { text-align: center; }
    .left { text-align: left; }
    .right { text-align: right; }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }
`

export default [departureEntityStyles, lineColorsStyles]