import { Migration } from '@mikro-orm/migrations';

export class Migration20240719233851 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `users` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `slack_user_id` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `plugs` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `user_id` int unsigned not null, `status` varchar(255) not null default \'OFF\', `auto_mode` tinyint(1) not null default false, `time` int null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `plugs` add unique `plugs_name_unique`(`name`);');
    this.addSql('alter table `plugs` add index `plugs_user_id_index`(`user_id`);');

    this.addSql('alter table `plugs` add constraint `plugs_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `plugs` drop foreign key `plugs_user_id_foreign`;');

    this.addSql('drop table if exists `users`;');

    this.addSql('drop table if exists `plugs`;');
  }

}
