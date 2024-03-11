import { css } from 'lit'

export const styles = css`
    ha-card {
        padding: 16px;
    }

    .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
        padding: 4px 0px 12px;
        display: flex;
        justify-content: space-between;
    }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }

    ha-icon.alert {
        color: red;
    }

    table.sl-table {
        width: 100%;
        border-spacing: 0px 8px;
    }

    th.col1, td.col1 {
        text-align: center;
        width: 24px;
        height: 30px;
    }

    th.col2, td.col2 {
        padding-left:10px;
        text-align: left;
        line-height: 18px;
    }

    th.col3, td.col3 {
        text-align: right;
        line-height: 18px;
        min-width: 50px;
    }

    /* Icons - Default for Boats and Metro Blue Line */
    .line-icon {
        width: auto;
        border-radius: 2px;
        background: #0089ca;
        padding: 3px 3px 0 3px;
        color: #fff;
        min-width: 22px;
        height: 22px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    }

    /* Metros */
    .line-icon.met_green {
        background-color: #179d4d;
    }

    /* Buses and Metro Red Line */
    .line-icon.bus_red, .line-icon.met_red {
        background-color: #d71d24;
    }

    /* Commuter Trains */
    .line-icon.trn {
        background-color: #ec619f;
    }

    /* Trams */
    .line-icon.trm {
        background-color: #985141;
    }

    .line-icon.trm.trm_7 {
        background-color: #878a83;
    }

    .line-icon.trm.trm_12 {
        background-color: #778da7;
    }

    .line-icon.trm.trm_21 {
        background-color: #b76020;
    }

    .line-icon.trm.trm_22 {
        background-color: #d77d00;
    }

    th.loose-icon, td.loose-icon {
        width: 40px;
        height: 40px;
    }

    th.loose-cell, td.loose-cell {
        line-height: 20px;
    }

    th.loose-padding, td.loose-padding {
        padding-left: 16px;
    }

    td.last-update {
        text-align: right;
        padding-left: 10px;
    }
`