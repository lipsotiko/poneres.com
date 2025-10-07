<template>
    <IContainer>
        <div class="top">
            <h3>Leasing Property</h3>
        </div>
        <div>
            <p class="lead">
                Getting your property leased shouldn't be a hassle — and with us, it isn't. We focus on securing qualified tenants quickly and efficiently, handling everything from marketing and showings to tenant screening and lease execution. Our streamlined leasing process is designed to minimize vacancy time while ensuring your property is in good hands from the start.
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
                            <td>Leasing</td>
                            <td>1 Month's Rent</td>
                        </tr>
                        <tr>
                            <td>Lease renewal</td>
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
            <!-- <div>
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
            </div> -->
            <!-- <div>
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
            </div> -->
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
