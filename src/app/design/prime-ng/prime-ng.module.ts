import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { TreeSelectModule } from 'primeng/treeselect';
import { ToolbarModule } from 'primeng/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ListboxModule } from 'primeng/listbox';
import { ImageModule } from 'primeng/image';
import { Chip, ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DataViewModule } from 'primeng/dataview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';


import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({


	imports: [

		CommonModule,
		CalendarModule,
		DropdownModule,
		TableModule,
		MultiSelectModule,
		TooltipModule,
		CheckboxModule,
		ButtonModule,
		InputTextModule,
		ToastModule,
		CardModule,
		TableModule,
		TreeTableModule,
		DialogModule,
		DragDropModule,
		TreeSelectModule,
		ToolbarModule,
		OverlayPanelModule,
		PanelModule,
		ConfirmDialogModule,
		MessagesModule,
		ListboxModule,
		ImageModule,
		ChipModule,
		DividerModule,
		RadioButtonModule,
		ProgressSpinnerModule,
		DataViewModule,
		InputTextareaModule,
		PaginatorModule,
		InputSwitchModule,
		TagModule,
		TabViewModule,
		TabMenuModule,

		ScrollTopModule,






	],

	exports: [

		CalendarModule,
		DropdownModule,
		TableModule,
		MultiSelectModule,
		TooltipModule,
		CheckboxModule,
		ButtonModule,
		InputTextModule,
		ToastModule,
		CardModule,
		TableModule,
		TreeTableModule,
		DialogModule,
		DragDropModule,
		TreeSelectModule,
		ToolbarModule,
		OverlayPanelModule,
		PanelModule,
		ConfirmDialogModule,
		MessagesModule,
		ListboxModule,
		ImageModule,
		ChipModule,
		DividerModule,
		ButtonModule,
		RadioButtonModule,
		ProgressSpinnerModule,
		DataViewModule,
		InputTextareaModule,
		PaginatorModule,
		InputSwitchModule,
		TagModule,
		TabViewModule,
		TabMenuModule,

		ScrollTopModule,





	],
	providers: [
		MessageService,
		ConfirmationService
	]

})
export class PrimeNgModule { }
