"""empty message

Revision ID: 0c5d31ad8eb4
Revises: 
Create Date: 2023-09-15 17:32:11.378360

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0c5d31ad8eb4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('institutional_user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('institutional_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('institutional_name')
    )
    op.create_table('scholarship',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('scholarship_name', sa.String(length=120), nullable=False),
    sa.Column('institution', sa.String(length=130), nullable=False),
    sa.Column('deadline', sa.String(length=50), nullable=False),
    sa.Column('modality', sa.String(length=50), nullable=False),
    sa.Column('coverage', sa.String(length=50), nullable=False),
    sa.Column('professional_field', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=800), nullable=False),
    sa.Column('url_to', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('trackers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('scholarship_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['scholarship_id'], ['scholarship.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('trackers')
    op.drop_table('user')
    op.drop_table('scholarship')
    op.drop_table('institutional_user')
    # ### end Alembic commands ###