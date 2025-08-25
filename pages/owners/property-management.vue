<template>
    <IContainer>
        <div class="top">
            <h3>Property Management</h3>
        </div>
        <div>
            <p class="lead">
                Managing a rental property can be time-consuming and complex, but we make it effortless. Our team works
                closely with you to develop a customized management strategy designed to maximize your property's value
                and ensure a seamless rental experience. From tenant screening and lease management to maintenance
                coordination and financial reporting, we handle every detail with professionalism and care. Our goal is
                to protect your investment while maximizing rental income and keeping your property in top condition.
            </p>
            <div>
                <ITable>
                    <thead>
                        <tr>
                            <th colspan="2" style="text-align: center;">
                                <b>Pricing</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="75%">Management</td>
                            <td>10% (min. $225) / month</td>
                        </tr>
                        <tr>
                            <td>Leasing</td>
                            <td>1 Month's Rent</td>
                        </tr>
                        <tr>
                            <td>Lease renewal</td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td>Set-up</td>
                            <td>$0</td>
                        </tr>
                    </tbody>
                </ITable>
            </div>
            <div>
                <ITable>
                    <thead>
                        <tr>
                            <th colspan="2" style="text-align: center;">
                                <b>Marketing & Tenant Procurement</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="75%">Comparative Market Analysis (CMA)</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Pre-Leasing Inspection</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Professional Quality Photos</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Marketing & Advertising</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Showings</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Tenant Screening</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Lease Preparation</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                    </tbody>
                </ITable>
            </div>
            <div>
                <ITable>
                    <thead>
                        <tr>
                            <th colspan="2" style="text-align: center;">
                                <b>Tenant Move-in</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="75%">Initial Fee/SD collection</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Move-in Inspection</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Issue Keys</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                    </tbody>
                </ITable>
            </div>
            <div>
                <ITable>
                    <thead>
                        <tr>
                            <th colspan="2" style="text-align: center;">
                                <b>Professional Management</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="75%">Rent collection</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Billing & Rent Distribution</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Maintenance & Repair</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Owner Statements</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                    </tbody>
                </ITable>
            </div>
            <div>
                <ITable>
                    <thead>
                        <tr>
                            <th colspan="2" style="text-align: center;">
                                <b>Tenant Move-out & Turnover</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="75%">Move-out Inspection</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Security Deposit Reconciliation</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                        <tr>
                            <td>Oversee Property Turnover</td>
                            <td>
                                <IIcon name="ink-check" />
                            </td>
                        </tr>
                    </tbody>
                </ITable>
            </div>
        </div>
    </IContainer>
</template>
<script setup>
useHead({
    titleTemplate: "Property Management | %s",
});
</script>
<style scoped>
.lead {
    padding: 38px;
    margin-bottom: 0;
}

.column {
    margin: 3px 0;
}
</style>
