import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {UserData} from './models/user.interface';

@Component({
  selector: 'lib-ds-header',
  templateUrl: './ds-header.component.html',
  styleUrls: ['./ds-header.component.scss']
})
export class DsHeaderComponent implements OnInit {
  /** Path to the logo image that will be displayed on the header. */
  @Input() logoPath: string = '';
  @Input() logoAltText: string = '';
  @Input() homePath: string = '';
  @Input() appTitle: string = '';
  @Input() appVersionNumber: string = '';
  @Input() isSidenavToggleDisabled: boolean = false;
  @Input() isSidenavToggleHidden: boolean = false;
  @Input() isLanguageHidden: boolean = true;
  @Input() userData!: UserData[];
  @Input() isUserMenuHidden: boolean = true;

  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() userMenuClicked = new EventEmitter<void>();
  @Output() languageChanged = new EventEmitter<void>();

  userName = '';

  @ViewChildren('headerMenu') private headerMenu!: QueryList<ElementRef<HTMLSpanElement>>;

  constructor() {}

  ngOnInit(): void {
    if (this.userData) {
      this.userName = this.userData.find((data) => data.key === 'User')?.value || '';
    }
  }
}
